# Phase 04: API Integration

## Objective
Create the API service to submit form data to the n8n webhook and handle responses.

## Implementation

### Create API Service: `lib/api/bimspeed-promo.ts`

```typescript
export interface PromoFormPayload {
  fullName: string;
  email: string;
  phone: string;
  work: string;
  submittedAt: string;
}

export interface PromoFormResponse {
  success: boolean;
  message?: string;
}

const WEBHOOK_URL =
  "https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622";

export async function submitPromoForm(
  payload: PromoFormPayload
): Promise<PromoFormResponse> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Try to parse JSON response, but handle cases where response might be empty
    let data: PromoFormResponse;
    try {
      data = await response.json();
    } catch {
      // If response is not JSON, treat as success if status is OK
      data = { success: true };
    }

    return data;
  } catch (error) {
    console.error("Failed to submit promo form:", error);

    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error(
        "Network error. Please check your connection and try again."
      );
    }

    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to submit form. Please try again."
    );
  }
}
```

## Key Points

1. **Webhook URL**: `https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622`
2. **Payload Format**: `{ fullName, phone, email, submittedAt, work }`
3. **Error Handling**:
   - Network errors (connection issues)
   - HTTP errors (non-2xx status codes)
   - JSON parsing errors (empty responses)
4. **Success Handling**: Returns success flag, form shows download link
5. **CORS**: Assumes webhook supports CORS for client-side requests

## Security Considerations

- No sensitive data in payload (no passwords, tokens)
- HTTPS endpoint ensures encrypted transmission
- Client-side validation before submission
- Rate limiting should be handled by webhook

## Next Phase
After this phase is complete, proceed to Phase 05 to build the YouTube videos section.
