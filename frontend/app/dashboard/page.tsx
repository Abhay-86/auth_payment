'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Activity, 
  CreditCard, 
  DollarSign, 
  Users, 
  TrendingUp,
  ArrowUpRight,
  Plus
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "+20.1% from last month",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Active Users",
      value: "+2,350",
      description: "+180.1% from last month", 
      icon: Users,
      trend: "up"
    },
    {
      title: "Transactions",
      value: "+12,234",
      description: "+19% from last month",
      icon: CreditCard,
      trend: "up"
    },
    {
      title: "Active Now",
      value: "+573",
      description: "+201 since last hour",
      icon: Activity,
      trend: "up"
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      user: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      status: "completed",
      avatar: "/avatars/01.png"
    },
    {
      id: 2,
      user: "Jackson Lee", 
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      status: "pending",
      avatar: "/avatars/02.png"
    },
    {
      id: 3,
      user: "Isabella Nguyen",
      email: "isabella.nguyen@email.com", 
      amount: "+$299.00",
      status: "completed",
      avatar: "/avatars/03.png"
    },
    {
      id: 4,
      user: "William Kim",
      email: "will@email.com",
      amount: "+$99.00", 
      status: "completed",
      avatar: "/avatars/04.png"
    }
  ]

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Here's an overview of your account and recent activity.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Overview Chart Placeholder */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Chart Component Placeholder
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              You made {recentTransactions.length} transactions this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={transaction.avatar} alt="Avatar" />
                    <AvatarFallback>
                      {transaction.user.split(' ').map((n) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {transaction.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.email}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center space-x-2">
                    <Badge 
                      variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    >
                      {transaction.status}
                    </Badge>
                    <div className="font-medium">{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Commonly used actions and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <CreditCard className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Invite Users
            </Button>
            <Button variant="outline" size="sm">
              <Activity className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline" size="sm">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
