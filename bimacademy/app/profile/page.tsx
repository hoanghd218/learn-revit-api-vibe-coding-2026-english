'use client';

import { useUser } from '@/lib/auth/auth-context';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/bim';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Upload, Save, Linkedin, Github, Globe, Bell, Lock, User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Profile Page - Full user profile management
 * Displays user info from Clerk and allows editing
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [isSaving, setIsSaving] = useState(false);

  // Form state (in real app, sync with backend)
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: '',
    bio: '',
    linkedin: '',
    github: '',
    website: '',
    emailNotifications: true,
    courseUpdates: true,
    affiliateAlerts: true,
  });

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Container className="pt-24">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-48" />
            <div className="h-64 bg-muted rounded-xl" />
            <div className="h-48 bg-muted rounded-xl" />
          </div>
        </Container>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Please sign in
          </h1>
          <p className="text-muted-foreground">
            You need to be signed in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Container className="pt-24 pb-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Profile Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your personal information and preferences
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {/* Avatar Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-coral-accent" />
                Profile Picture
              </CardTitle>
              <CardDescription>
                Update your profile photo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={user.imageUrl || '/default-avatar.png'}
                    alt="Profile"
                    className="h-24 w-24 rounded-full border-2 border-border object-cover"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 border-coral-accent"
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {user.fullName || 'Your Name'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {user.email}
                  </p>
                  <Button variant="link" size="sm" className="text-coral-accent h-auto p-0 mt-1">
                    Change avatar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email || ''}
                  disabled
                  className="bg-muted/50 border-border"
                />
                <p className="text-xs text-muted-foreground">
                  Email is managed by your account
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="bg-input border-border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card>
            <CardHeader>
              <CardTitle>Bio</CardTitle>
              <CardDescription>
                Tell others a bit about yourself
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write a brief bio about yourself, your background, and what you hope to achieve..."
                value={formData.bio}
                onChange={(e) => updateField('bio', e.target.value)}
                className="min-h-32 bg-input border-border resize-none"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {formData.bio.length}/500 characters
              </p>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>
                Connect your social accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={(e) => updateField('linkedin', e.target.value)}
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Label>
                <Input
                  id="github"
                  placeholder="https://github.com/username"
                  value={formData.github}
                  onChange={(e) => updateField('github', e.target.value)}
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-coral-accent" />
                  Website
                </Label>
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  className="bg-input border-border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-coral-accent" />
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">
                  Password
                </h4>
                <Button variant="outline" className="border-coral-accent text-coral-accent hover:bg-coral-accent/10">
                  Change Password
                </Button>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Bell className="h-4 w-4 text-coral-accent" />
                  Notifications
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.emailNotifications}
                      onChange={(e) => updateField('emailNotifications', e.target.checked)}
                      className="h-4 w-4 rounded border-border bg-input text-coral-accent focus:ring-coral-accent"
                    />
                    <span className="text-sm text-foreground">
                      Email notifications
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.courseUpdates}
                      onChange={(e) => updateField('courseUpdates', e.target.checked)}
                      className="h-4 w-4 rounded border-border bg-input text-coral-accent focus:ring-coral-accent"
                    />
                    <span className="text-sm text-foreground">
                      Course updates and announcements
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.affiliateAlerts}
                      onChange={(e) => updateField('affiliateAlerts', e.target.checked)}
                      className="h-4 w-4 rounded border-border bg-input text-coral-accent focus:ring-coral-accent"
                    />
                    <span className="text-sm text-foreground">
                      Affiliate commission alerts
                    </span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="glow-coral"
            >
              {isSaving ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
