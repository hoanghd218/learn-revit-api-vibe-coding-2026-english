'use client';

import { useUser } from '@/lib/auth/auth-context';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/bim';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Copy,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  Link2,
  Percent,
  Gift,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Affiliate Dashboard Page
 * Displays referral link, commission stats, and earnings history
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export default function AffiliatePage() {
  const { user, isLoaded } = useUser();
  const [copied, setCopied] = useState(false);

  // Mock data for demonstration
  const referralLink = `https://bimdeveloperacademy.com/ref/${user?.sn || 'user123'}`;
  const stats = {
    totalEarnings: 1250.0,
    totalReferrals: 8,
    pendingCommission: 150.0,
    paidOut: 1100.0,
  };

  const earningsHistory = [
    {
      id: 1,
      date: '2026-01-05',
      referral: 'john.doe@email.com',
      course: 'BIM Developer Masterclass',
      amount: 150.0,
      status: 'pending',
    },
    {
      id: 2,
      date: '2026-01-02',
      referral: 'jane.smith@email.com',
      course: 'Revit API Fundamentals',
      amount: 75.0,
      status: 'approved',
    },
    {
      id: 3,
      date: '2025-12-28',
      referral: 'mike.wilson@email.com',
      course: 'BIM Developer Masterclass',
      amount: 150.0,
      status: 'paid',
    },
    {
      id: 4,
      date: '2025-12-20',
      referral: 'sarah.jones@email.com',
      course: 'Revit API Fundamentals',
      amount: 75.0,
      status: 'paid',
    },
    {
      id: 5,
      date: '2025-12-15',
      referral: 'tom.brown@email.com',
      course: 'BIM Developer Masterclass',
      amount: 150.0,
      status: 'paid',
    },
  ];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Container className="pt-24">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-48" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-muted rounded-xl" />
              ))}
            </div>
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
            You need to be signed in to view your affiliate dashboard.
          </p>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      pending: 'secondary',
      approved: 'default',
      paid: 'outline',
    };
    const colors: Record<string, string> = {
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      approved: 'bg-coral-accent/20 text-coral-accent border-coral-accent/50',
      paid: 'bg-green-500/20 text-green-400 border-green-500/50',
    };
    return (
      <Badge
        variant={variants[status] || 'secondary'}
        className={cn('capitalize border', colors[status])}
      >
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Container className="pt-24 pb-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Affiliate Dashboard
          </h1>
          <p className="text-muted-foreground">
            Share your referral link and earn commissions on every sale
          </p>
        </div>

        <div className="grid gap-6">
          {/* Referral Link Section */}
          <Card className="border-coral-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-5 w-5 text-coral-accent" />
                Your Referral Link
              </CardTitle>
              <CardDescription>
                Share this link to earn commission on every enrollment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Input
                  value={referralLink}
                  readOnly
                  className="bg-input border-border font-mono text-sm"
                />
                <Button
                  onClick={handleCopy}
                  variant={copied ? 'secondary' : 'default'}
                  className={cn(
                    'min-w-28 transition-all',
                    copied && 'bg-green-500 hover:bg-green-500/80'
                  )}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Earn 20% on every course enrollment through your link
              </p>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover-border-coral transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Earnings</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${stats.totalEarnings.toFixed(2)}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-coral-accent/20 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-coral-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-border-coral transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Referrals</p>
                    <p className="text-2xl font-bold text-foreground">
                      {stats.totalReferrals}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-bronze-accent/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-bronze-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-border-coral transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${stats.pendingCommission.toFixed(2)}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-border-coral transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Paid Out</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${stats.paidOut.toFixed(2)}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Commission Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5 text-coral-accent" />
                Commission Rates
              </CardTitle>
              <CardDescription>
                Earn rewards based on referral tier
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-medium text-foreground mb-1">Bronze</h4>
                  <p className="text-2xl font-bold text-coral-accent mb-1">15%</p>
                  <p className="text-xs text-muted-foreground">1-5 referrals</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-bronze-accent/50">
                  <h4 className="font-medium text-foreground mb-1">Silver</h4>
                  <p className="text-2xl font-bold text-bronze-accent mb-1">20%</p>
                  <p className="text-xs text-muted-foreground">6-15 referrals</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-primary/50">
                  <h4 className="font-medium text-foreground mb-1">Gold</h4>
                  <p className="text-2xl font-bold text-primary mb-1">25%</p>
                  <p className="text-xs text-muted-foreground">16+ referrals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Earnings History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-coral-accent" />
                Earnings History
              </CardTitle>
              <CardDescription>
                Track your commission payouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Referral
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                        Course
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                        Amount
                      </th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningsHistory.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 px-4 text-foreground">
                          {item.date}
                        </td>
                        <td className="py-3 px-4 text-foreground">
                          {item.referral}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {item.course}
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-foreground">
                          ${item.amount.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {getStatusBadge(item.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
