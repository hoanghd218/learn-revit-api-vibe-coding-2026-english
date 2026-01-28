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

export async function submitPromoForm(
  payload: PromoFormPayload
): Promise<PromoFormResponse> {
  try {
    // Call our secure server-side API route instead of webhook directly
    const response = await fetch("/api/bimspeed-promo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
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
