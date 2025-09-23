"use client"

import * as React from "react"
import {
  IconPhone,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconBrain,
  IconFileDescription,
  IconUsers,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconHeadphones,
  IconMessageCircle,
  IconTrendingUp,
  IconUserPlus,
  IconShield,
  IconTarget,
  IconStar,
  IconHistory,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Çağrı Merkezi AI",
    email: "admin@cagrimerkezi.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Çağrı Yönetimi",
      url: "#",
      icon: IconPhone,
      items: [
        {
          title: "Aktif Çağrılar",
          url: "/calls/active",
        },
        {
          title: "Çağrı Kuyruğu",
          url: "/calls/queue",
        },
        {
          title: "Çağrı Geçmişi",
          url: "/calls/history",
        },
        {
          title: "Çağrı İstatistikleri",
          url: "/calls/stats",
        },
      ],
    },
    {
      title: "AI Analizleri",
      url: "#",
      icon: IconBrain,
      items: [
        {
          title: "Duygu Analizi",
          url: "/ai/sentiment",
        },
        {
          title: "Otomatik Yanıtlar",
          url: "/ai/responses",
        },
        {
          title: "Çağrı Özetleme",
          url: "/ai/summary",
        },
        {
          title: "AI Öğrenme",
          url: "/ai/learning",
        },
      ],
    },
    {
      title: "Müşteri Yönetimi",
      url: "#",
      icon: IconUsers,
      items: [
        {
          title: "Müşteri Listesi",
          url: "/customers/list",
        },
        {
          title: "Müşteri Profilleri",
          url: "/customers/profiles",
        },
        {
          title: "Müşteri Segmentasyonu",
          url: "/customers/segmentation",
        },
        {
          title: "CRM Entegrasyonu",
          url: "/customers/crm",
        },
      ],
    },
    {
      title: "Takım Yönetimi",
      url: "#",
      icon: IconUserPlus,
      items: [
        {
          title: "Personel Listesi",
          url: "/team/staff",
        },
        {
          title: "Vardiya Planlama",
          url: "/team/shifts",
        },
        {
          title: "Performans Takibi",
          url: "/team/performance",
        },
        {
          title: "Eğitim Modülleri",
          url: "/team/training",
        },
      ],
    },
    {
      title: "Raporlama",
      url: "#",
      icon: IconChartBar,
      items: [
        {
          title: "Gerçek Zamanlı Dashboard",
          url: "/reports/realtime",
        },
        {
          title: "Performans Raporları",
          url: "/reports/performance",
        },
        {
          title: "Müşteri Memnuniyeti",
          url: "/reports/satisfaction",
        },
        {
          title: "AI İçgörüleri",
          url: "/reports/insights",
        },
      ],
    },
    {
      title: "Güvenlik & Ayarlar",
      url: "#",
      icon: IconShield,
      items: [
        {
          title: "Kullanıcı Yetkileri",
          url: "/security/permissions",
        },
        {
          title: "Sistem Ayarları",
          url: "/security/settings",
        },
        {
          title: "Güvenlik Logları",
          url: "/security/logs",
        },
        {
          title: "Yedekleme",
          url: "/security/backup",
        },
      ],
    },
  ],
  navClouds: [
    {
      title: "Canlı Operasyonlar",
      icon: IconHeadphones,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Aktif Görüşmeler",
          url: "/live/active-calls",
        },
        {
          title: "Bekleyen Çağrılar",
          url: "/live/waiting-calls",
        },
        {
          title: "Canlı İstatistikler",
          url: "/live/statistics",
        },
        {
          title: "Acil Durumlar",
          url: "/live/emergencies",
        },
      ],
    },
    {
      title: "Kalite Yönetimi",
      icon: IconStar,
      url: "#",
      items: [
        {
          title: "Çağrı Kalite Kontrolü",
          url: "/quality/call-review",
        },
        {
          title: "Müşteri Memnuniyeti",
          url: "/quality/satisfaction",
        },
        {
          title: "Performans Metrikleri",
          url: "/quality/metrics",
        },
        {
          title: "İyileştirme Önerileri",
          url: "/quality/improvements",
        },
      ],
    },
    {
      title: "Veri Yönetimi",
      icon: IconDatabase,
      url: "#",
      items: [
        {
          title: "Veri İçe Aktarma",
          url: "/data/import",
        },
        {
          title: "Veri Dışa Aktarma",
          url: "/data/export",
        },
        {
          title: "Veri Temizleme",
          url: "/data/cleanup",
        },
        {
          title: "Veri Analizi",
          url: "/data/analysis",
        },
      ],
    },
    {
      title: "Entegrasyonlar",
      icon: IconTarget,
      url: "#",
      items: [
        {
          title: "VoIP Sistemleri",
          url: "/integrations/voip",
        },
        {
          title: "CRM Sistemleri",
          url: "/integrations/crm",
        },
        {
          title: "E-posta Sistemleri",
          url: "/integrations/email",
        },
        {
          title: "Sosyal Medya",
          url: "/integrations/social",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Ayarlar",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Yardım",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Arama",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Müşteri Veritabanı",
      url: "/docs/customer-db",
      icon: IconDatabase,
    },
    {
      name: "Performans Raporları",
      url: "/docs/performance-reports",
      icon: IconReport,
    },
    {
      name: "Çağrı Kayıtları",
      url: "/docs/call-records",
      icon: IconMessageCircle,
    },
    {
      name: "AI Öğrenme Verileri",
      url: "/docs/ai-learning",
      icon: IconTrendingUp,
    },
    {
      name: "Sistem Logları",
      url: "/docs/system-logs",
      icon: IconHistory,
    },
    {
      name: "Kullanım Kılavuzları",
      url: "/docs/manuals",
      icon: IconFileDescription,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Çağrı Merkezi AI</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navClouds} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
