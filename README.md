# 📞 Çağrı Merkezi AI Uygulaması

Modern çağrı merkezi işletmeleri için AI destekli, kapsamlı yönetim ve operasyon platformu.

## 🚀 Özellikler

### 🤖 AI Destekli Görüşme Sistemi

- Akıllı müşteri arama ve yönlendirme
- Gerçek zamanlı duygu analizi
- Otomatik görüşme özetleme
- Çoklu dil desteği (Türkçe, İngilizce)

### 👥 Müşteri Yönetimi

- Toplu müşteri yükleme (CSV, Excel, JSON)
- AI destekli müşteri segmentasyonu
- CRM entegrasyonu
- Müşteri profilleme ve davranış analizi

### 📞 VoIP ve Çağrı Yönetimi

- SIP entegrasyonu
- Otomatik çağrı kayıt sistemi
- Akıllı çağrı yönlendirme
- Detaylı çağrı istatistikleri

### 🏢 Takım ve Kullanıcı Yönetimi

- Hiyerarşik organizasyon yapısı
- Rol tabanlı erişim kontrolü
- Performans takibi ve metrikler
- Vardiya yönetimi

### 💾 Drive ve Dosya Yönetimi

- Merkezi dosya depolama
- Versiyon kontrolü
- Takım içi dosya paylaşımı
- Otomatik yedekleme

### 📊 Raporlama ve Analitik

- Gerçek zamanlı dashboard
- AI destekli içgörüler
- Özelleştirilebilir raporlar
- Görselleştirme araçları

## 🛠️ Teknoloji Yığını

### Frontend

- **React/Next.js** - Modern, responsive UI
- **TypeScript** - Tip güvenli geliştirme
- **Tailwind CSS** - Hızlı styling
- **Shadcn UI** - Modern UI bileşenleri
- **PWA** - Mobil uygulama deneyimi

### Backend

- **Node.js/Express** - Hızlı ve ölçeklenebilir API
- **PostgreSQL** - Güçlü ilişkisel veritabanı
- **Redis** - Cache ve session yönetimi
- **WebSocket** - Gerçek zamanlı iletişim
- **JWT** - Güvenli kimlik doğrulama

### AI ve ML

- **OpenAI GPT** - Doğal dil işleme
- **Whisper** - Ses tanıma ve transkripsiyon
- **Custom ML Modelleri** - Müşteri segmentasyonu
- **Sentiment Analysis** - Duygu analizi

### VoIP ve Ses

- **WebRTC** - Tarayıcı tabanlı ses iletişimi
- **Asterisk** - PBX sistemi entegrasyonu
- **FFmpeg** - Ses işleme ve dönüştürme

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Docker (opsiyonel)

### Hızlı Başlangıç

1. **Projeyi klonlayın**

```bash
git clone https://github.com/uzeyirrr/callcenter.git
cd callcenter
```

2. **Bağımlılıkları yükleyin**

```bash
npm install
```

3. **Ortam değişkenlerini ayarlayın**

```bash
cp .env.example .env
# .env dosyasını düzenleyin
```

4. **Veritabanını kurun**

```bash
npm run db:migrate
npm run db:seed
```

5. **Uygulamayı başlatın**

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
callcenter-ai/
├── src/
│   ├── components/          # React bileşenleri
│   ├── pages/              # Next.js sayfaları
│   ├── api/                # API routes
│   ├── lib/                # Yardımcı fonksiyonlar
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript tip tanımları
│   └── utils/              # Utility fonksiyonlar
├── server/                 # Backend API
│   ├── controllers/        # API controllers
│   ├── models/             # Veritabanı modelleri
│   ├── routes/             # API routes
│   ├── middleware/         # Express middleware
│   └── services/           # İş mantığı servisleri
├── ai/                     # AI ve ML modülleri
│   ├── nlp/                # Doğal dil işleme
│   ├── voice/              # Ses işleme
│   └── models/             # ML modelleri
├── docs/                   # Dokümantasyon
├── tests/                  # Test dosyaları
└── public/                 # Statik dosyalar
```

## 🔧 Geliştirme

### Komutlar

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Testleri çalıştır
npm run test

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Type checking
npm run type-check
```

### Docker ile Çalıştırma

```bash
# Tüm servisleri başlat
docker-compose up -d

# Sadece geliştirme ortamı
docker-compose -f docker-compose.dev.yml up
```

## 📊 API Dokümantasyonu

API dokümantasyonu `/api/docs` adresinde Swagger UI ile erişilebilir.

### Ana Endpoint'ler

- `POST /api/auth/login` - Kullanıcı girişi
- `GET /api/customers` - Müşteri listesi
- `POST /api/calls` - Çağrı başlatma
- `GET /api/reports` - Raporlar
- `POST /api/ai/analyze` - AI analiz

## 🔐 Güvenlik

- **End-to-End Encryption** - Tüm veri iletişimi şifreli
- **GDPR Uyumluluğu** - Veri koruma standartları
- **Multi-Factor Authentication** - Çok faktörlü kimlik doğrulama
- **Audit Logs** - Tüm işlemlerin kayıt altına alınması
- **Role-Based Access Control** - Detaylı yetki yönetimi

## 📱 Platform Desteği

- ✅ **Web Uygulaması** - Tüm modern tarayıcılar
- ✅ **Mobil Uygulama** - iOS ve Android (gelecek)
- ✅ **Desktop Uygulama** - Windows, macOS, Linux (gelecek)
- ✅ **API** - RESTful API entegrasyonları

## 💰 Fiyatlandırma

### Freemium Model

- **Platform Kullanımı**: Tamamen ücretsiz
- **AI Özellikleri**: Ücretsiz
- **Müşteri Yönetimi**: Ücretsiz
- **Raporlama**: Ücretsiz

### VoIP Kredi Sistemi

- **Başlangıç**: 100 dakika - Belirlenmedi
- **Standart**: 500 dakika - Belirlenmedi
- **Profesyonel**: 1000 dakika - Belirlenmedi
- **Kurumsal**: 5000 dakika - Belirlenmedi
- **Sınırsız**: Aylık Belirlenmedi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Proje Sahibi:** Üzeyir İsmail Bahtiyar
- **Email:** uzeyirismailbahtiyar@gmail.com
- **Website:** https://yezuri.com
- **LinkedIn:** https://www.linkedin.com/in/%C3%BCzeyirismail/

## 🙏 Teşekkürler

- [OpenAI](https://openai.com) - AI teknolojileri
- [Vercel](https://vercel.com) - Hosting ve deployment
- [Shadcn](https://ui.shadcn.com) - UI bileşenleri
- [Tailwind CSS](https://tailwindcss.com) - CSS framework

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

## 📈 Roadmap

### Q1 2024

- [x] Proje planlama ve mimari tasarım
- [x] Temel altyapı kurulumu
- [ ] Kullanıcı yönetimi sistemi
- [ ] Temel dashboard

### Q2 2024

- [ ] VoIP entegrasyonu
- [ ] Çağrı yönetimi
- [ ] Müşteri yönetim modülü
- [ ] Temel raporlama

### Q3 2024

- [ ] AI görüşme sistemi
- [ ] Doğal dil işleme
- [ ] Otomatik özetleme
- [ ] Sentiment analizi

### Q4 2024

- [ ] Drive sistemi
- [ ] Gelişmiş raporlama
- [ ] Mobil uygulama
- [ ] Performance optimizasyonu

---

_Son güncelleme: 2024_
