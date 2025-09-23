"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", cagrilar: 1850, aiDestekli: 1200 },
  { date: "2024-04-02", cagrilar: 2100, aiDestekli: 1400 },
  { date: "2024-04-03", cagrilar: 1950, aiDestekli: 1300 },
  { date: "2024-04-04", cagrilar: 2200, aiDestekli: 1500 },
  { date: "2024-04-05", cagrilar: 2400, aiDestekli: 1600 },
  { date: "2024-04-06", cagrilar: 1800, aiDestekli: 1200 },
  { date: "2024-04-07", cagrilar: 1600, aiDestekli: 1100 },
  { date: "2024-04-08", cagrilar: 2300, aiDestekli: 1550 },
  { date: "2024-04-09", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-04-10", cagrilar: 2150, aiDestekli: 1450 },
  { date: "2024-04-11", cagrilar: 2250, aiDestekli: 1500 },
  { date: "2024-04-12", cagrilar: 1950, aiDestekli: 1300 },
  { date: "2024-04-13", cagrilar: 2100, aiDestekli: 1400 },
  { date: "2024-04-14", cagrilar: 1800, aiDestekli: 1200 },
  { date: "2024-04-15", cagrilar: 1700, aiDestekli: 1150 },
  { date: "2024-04-16", cagrilar: 2050, aiDestekli: 1380 },
  { date: "2024-04-17", cagrilar: 2350, aiDestekli: 1580 },
  { date: "2024-04-18", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-04-19", cagrilar: 1900, aiDestekli: 1280 },
  { date: "2024-04-20", cagrilar: 1750, aiDestekli: 1180 },
  { date: "2024-04-21", cagrilar: 1850, aiDestekli: 1250 },
  { date: "2024-04-22", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-04-23", cagrilar: 2150, aiDestekli: 1450 },
  { date: "2024-04-24", cagrilar: 2300, aiDestekli: 1550 },
  { date: "2024-04-25", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-04-26", cagrilar: 1950, aiDestekli: 1320 },
  { date: "2024-04-27", cagrilar: 2250, aiDestekli: 1520 },
  { date: "2024-04-28", cagrilar: 1800, aiDestekli: 1220 },
  { date: "2024-04-29", cagrilar: 2050, aiDestekli: 1380 },
  { date: "2024-04-30", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-05-01", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-05-02", cagrilar: 2350, aiDestekli: 1580 },
  { date: "2024-05-03", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-05-04", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-05-05", cagrilar: 2600, aiDestekli: 1750 },
  { date: "2024-05-06", cagrilar: 2700, aiDestekli: 1820 },
  { date: "2024-05-07", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-05-08", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-05-09", cagrilar: 2150, aiDestekli: 1450 },
  { date: "2024-05-10", cagrilar: 2300, aiDestekli: 1550 },
  { date: "2024-05-11", cagrilar: 2450, aiDestekli: 1650 },
  { date: "2024-05-12", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-05-13", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-05-14", cagrilar: 2600, aiDestekli: 1750 },
  { date: "2024-05-15", cagrilar: 2700, aiDestekli: 1820 },
  { date: "2024-05-16", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-05-17", cagrilar: 2800, aiDestekli: 1890 },
  { date: "2024-05-18", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-05-19", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-05-20", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-05-21", cagrilar: 1850, aiDestekli: 1250 },
  { date: "2024-05-22", cagrilar: 1900, aiDestekli: 1280 },
  { date: "2024-05-23", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-05-24", cagrilar: 2350, aiDestekli: 1580 },
  { date: "2024-05-25", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-05-26", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-05-27", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-05-28", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-05-29", cagrilar: 1950, aiDestekli: 1320 },
  { date: "2024-05-30", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-05-31", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-06-01", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-06-02", cagrilar: 2600, aiDestekli: 1750 },
  { date: "2024-06-03", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-06-04", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-06-05", cagrilar: 1900, aiDestekli: 1280 },
  { date: "2024-06-06", cagrilar: 2300, aiDestekli: 1550 },
  { date: "2024-06-07", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-06-08", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-06-09", cagrilar: 2600, aiDestekli: 1750 },
  { date: "2024-06-10", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-06-11", cagrilar: 1950, aiDestekli: 1320 },
  { date: "2024-06-12", cagrilar: 2700, aiDestekli: 1820 },
  { date: "2024-06-13", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-06-14", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-06-15", cagrilar: 2300, aiDestekli: 1550 },
  { date: "2024-06-16", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-06-17", cagrilar: 2800, aiDestekli: 1890 },
  { date: "2024-06-18", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-06-19", cagrilar: 2350, aiDestekli: 1580 },
  { date: "2024-06-20", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-06-21", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-06-22", cagrilar: 2400, aiDestekli: 1620 },
  { date: "2024-06-23", cagrilar: 2700, aiDestekli: 1820 },
  { date: "2024-06-24", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-06-25", cagrilar: 2100, aiDestekli: 1420 },
  { date: "2024-06-26", cagrilar: 2500, aiDestekli: 1680 },
  { date: "2024-06-27", cagrilar: 2600, aiDestekli: 1750 },
  { date: "2024-06-28", cagrilar: 2200, aiDestekli: 1480 },
  { date: "2024-06-29", cagrilar: 2000, aiDestekli: 1350 },
  { date: "2024-06-30", cagrilar: 2500, aiDestekli: 1680 },
]

const chartConfig = {
  cagrilar: {
    label: "Toplam Çağrılar",
    color: "var(--primary)",
  },
  aiDestekli: {
    label: "AI Destekli Çağrılar",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Çağrı Merkezi İstatistikleri</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Son 3 aylık çağrı ve AI destekli görüşme verileri
          </span>
          <span className="@[540px]/card:hidden">Son 3 ay</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Son 3 ay</ToggleGroupItem>
            <ToggleGroupItem value="30d">Son 30 gün</ToggleGroupItem>
            <ToggleGroupItem value="7d">Son 7 gün</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Son 3 ay" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Son 3 ay
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Son 30 gün
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Son 7 gün
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCagrilar" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cagrilar)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cagrilar)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAiDestekli" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-aiDestekli)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-aiDestekli)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="aiDestekli"
              type="natural"
              fill="url(#fillAiDestekli)"
              stroke="var(--color-aiDestekli)"
              stackId="a"
            />
            <Area
              dataKey="cagrilar"
              type="natural"
              fill="url(#fillCagrilar)"
              stroke="var(--color-cagrilar)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
