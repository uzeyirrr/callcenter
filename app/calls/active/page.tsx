"use client"

import * as React from "react"
import { 
  IconPhone, 
  IconPhoneOff, 
  IconMicrophone, 
  IconMicrophoneOff,
  IconVolume,
  IconVolumeOff,
  IconVideo,
  IconVideoOff,
  IconUser,
  IconBrain,
  IconFileText,
  IconTransfer,
  IconClock,
  IconCheck,
  IconPlayerPause,
  IconCircle,
  IconSquare
} from "@tabler/icons-react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function ActiveCallsPage() {
  const [isCallActive, setIsCallActive] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [isSpeakerOn, setIsSpeakerOn] = React.useState(false)
  const [isVideoOn, setIsVideoOn] = React.useState(false)
  const [isRecording, setIsRecording] = React.useState(false)
  const [callDuration, setCallDuration] = React.useState(0)
  const [callSummary, setCallSummary] = React.useState("")
  const [customerInfo] = React.useState({
    name: "Ahmet Yılmaz",
    phone: "+90 532 123 45 67",
    email: "ahmet.yilmaz@email.com",
    company: "ABC Teknoloji A.Ş.",
    priority: "Yüksek",
    previousCalls: 3
  })

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isCallActive])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const startCall = () => {
    setIsCallActive(true)
    setCallDuration(0)
  }

  const endCall = () => {
    setIsCallActive(false)
    setCallDuration(0)
    setIsRecording(false)
  }

  const toggleMute = () => setIsMuted(!isMuted)
  const toggleSpeaker = () => setIsSpeakerOn(!isSpeakerOn)
  const toggleVideo = () => setIsVideoOn(!isVideoOn)
  const toggleRecording = () => setIsRecording(!isRecording)

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Aktif Çağrı Yönetimi</h1>
            <p className="text-muted-foreground">Çağrıları yönetin, AI özelliklerini kullanın</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ana Çağrı Kontrol Paneli */}
            <div className="lg:col-span-2 space-y-6">
              {/* Çağrı Durumu */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconPhone className="h-5 w-5" />
                    Çağrı Durumu
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!isCallActive ? (
                    <div className="text-center py-8">
                      <div className="relative mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <IconPhone className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full animate-ping opacity-30"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Çağrı Bekleniyor</h3>
                      <p className="text-muted-foreground mb-4">Yeni bir çağrı başlatmak için aşağıdaki butonu kullanın</p>
                      <Button onClick={startCall} size="lg" className="bg-green-600 hover:bg-green-700">
                        <IconPhone className="mr-2 h-4 w-4" />
                        Çağrı Başlat
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-30"></div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                              <IconPhone className="w-4 h-4 text-green-600" />
                              Çağrı Aktif
                            </h3>
                            <p className="text-muted-foreground">Süre: {formatDuration(callDuration)}</p>
                          </div>
                        </div>
                        <Badge variant={isRecording ? "destructive" : "secondary"}>
                          {isRecording ? "Kayıt Alınıyor" : "Kayıt Yok"}
                        </Badge>
                      </div>
                      
                      <Progress value={75} className="w-full" />
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <Button
                          variant={isMuted ? "destructive" : "outline"}
                          size="sm"
                          onClick={toggleMute}
                        >
                          {isMuted ? <IconMicrophoneOff className="h-4 w-4" /> : <IconMicrophone className="h-4 w-4" />}
                          {isMuted ? "Sustur" : "Mikrofon"}
                        </Button>
                        
                        <Button
                          variant={isSpeakerOn ? "default" : "outline"}
                          size="sm"
                          onClick={toggleSpeaker}
                        >
                          {isSpeakerOn ? <IconVolume className="h-4 w-4" /> : <IconVolumeOff className="h-4 w-4" />}
                          Hoparlör
                        </Button>
                        
                        <Button
                          variant={isVideoOn ? "default" : "outline"}
                          size="sm"
                          onClick={toggleVideo}
                        >
                          {isVideoOn ? <IconVideo className="h-4 w-4" /> : <IconVideoOff className="h-4 w-4" />}
                          Video
                        </Button>
                        
                        <Button
                          variant={isRecording ? "destructive" : "outline"}
                          size="sm"
                          onClick={toggleRecording}
                        >
                          {isRecording ? <IconSquare className="h-4 w-4" /> : <IconCircle className="h-4 w-4" />}
                          Kayıt
                        </Button>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setIsCallActive(false)}
                        >
                          <IconPlayerPause className="mr-2 h-4 w-4" />
                          Beklet
                        </Button>
                        
                        <Button
                          variant="destructive"
                          onClick={endCall}
                        >
                          <IconPhoneOff className="mr-2 h-4 w-4" />
                          Çağrıyı Sonlandır
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* AI Özellikleri */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconBrain className="h-5 w-5" />
                    AI Destekli Özellikler
                  </CardTitle>
                  <CardDescription>
                    Yapay zeka ile çağrı analizi ve otomatik özellikler
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <IconFileText className="h-6 w-6 mb-2" />
                      <span>Gerçek Zamanlı Transkripsiyon</span>
                    </Button>
                    
                    <Button variant="outline" className="h-20 flex-col">
                      <IconBrain className="h-6 w-6 mb-2" />
                      <span>Duygu Analizi</span>
                    </Button>
                    
                    <Button variant="outline" className="h-20 flex-col">
                      <IconFileText className="h-6 w-6 mb-2" />
                      <span>Otomatik Özet</span>
                    </Button>
                    
                    <Button variant="outline" className="h-20 flex-col">
                      <IconUser className="h-6 w-6 mb-2" />
                      <span>Müşteri Profili</span>
                    </Button>
                  </div>
                  
                  {isCallActive && (
                    <Alert>
                      <IconBrain className="h-4 w-4" />
                      <AlertDescription>
                        AI sistemi çağrıyı analiz ediyor. Müşteri memnuniyeti: %87, Duygu durumu: Pozitif
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Çağrı Özeti */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconFileText className="h-5 w-5" />
                    Çağrı Özeti
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Çağrı özeti buraya yazılacak..."
                    className="min-h-[100px]"
                    value={callSummary}
                    onChange={(e) => setCallSummary(e.target.value)}
                  />
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">
                      <IconCheck className="mr-2 h-4 w-4" />
                      Özeti Kaydet
                    </Button>
                    <Button variant="outline" size="sm">
                      <IconBrain className="mr-2 h-4 w-4" />
                      AI ile Özetle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Yan Panel - Müşteri Bilgileri ve Kontroller */}
            <div className="space-y-6">
              {/* Müşteri Bilgileri */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconUser className="h-5 w-5" />
                    Müşteri Bilgileri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Ad Soyad</Label>
                    <p className="text-sm text-muted-foreground">{customerInfo.name}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Telefon</Label>
                    <p className="text-sm text-muted-foreground">{customerInfo.phone}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">E-posta</Label>
                    <p className="text-sm text-muted-foreground">{customerInfo.email}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Şirket</Label>
                    <p className="text-sm text-muted-foreground">{customerInfo.company}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Öncelik</Label>
                    <Badge variant={customerInfo.priority === "Yüksek" ? "destructive" : "secondary"}>
                      {customerInfo.priority}
                    </Badge>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Önceki Çağrılar</Label>
                    <p className="text-sm text-muted-foreground">{customerInfo.previousCalls} çağrı</p>
                  </div>
                </CardContent>
              </Card>

              {/* Temsilci Geçiş */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconTransfer className="h-5 w-5" />
                    Temsilci Geçiş
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="transfer-reason">Geçiş Nedeni</Label>
                    <Input
                      id="transfer-reason"
                      placeholder="Geçiş nedenini belirtin..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="transfer-to">Temsilci Seç</Label>
                    <Input
                      id="transfer-to"
                      placeholder="Temsilci adı veya ID..."
                    />
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <IconTransfer className="mr-2 h-4 w-4" />
                    Temsilciye Geç
                  </Button>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>Hızlı Geçiş</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Teknik Destek
                      </Button>
                      <Button variant="outline" size="sm">
                        Satış
                      </Button>
                      <Button variant="outline" size="sm">
                        Müşteri Hizmetleri
                      </Button>
                      <Button variant="outline" size="sm">
                        Yönetici
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Çağrı Geçmişi */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconClock className="h-5 w-5" />
                    Son Çağrılar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm font-medium">Teknik Destek</p>
                      <p className="text-xs text-muted-foreground">2 gün önce</p>
                    </div>
                    <Badge variant="secondary">15 dk</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm font-medium">Fatura Sorgulama</p>
                      <p className="text-xs text-muted-foreground">1 hafta önce</p>
                    </div>
                    <Badge variant="secondary">8 dk</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="text-sm font-medium">Ürün Bilgisi</p>
                      <p className="text-xs text-muted-foreground">2 hafta önce</p>
                    </div>
                    <Badge variant="secondary">12 dk</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
