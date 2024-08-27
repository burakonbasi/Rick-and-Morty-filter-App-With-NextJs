## Proje Yapısı
Next.js 14 ve Tailwind CSS kullanarak bir Rick and Morty karakter listeleme ve filtreleme uygulaması oluşturdum. 

Bu uygulama, SSR (Server-Side Rendering) kullanılarak oluşturulmuştur ve karakterler status ve gender gibi filtrelere göre listelenebilir.

## Kullanım Talimatları

## Başlatmak için:

npm install veya yarn ile gerekli paketleri yükleyin.

npm run dev veya yarn dev komutu ile geliştirme sunucusunu başlatın.

Bu yapı, karakterlerin filtrelenmesi ve SSR kullanarak verilerin alınması işlevlerini sağlar. Kullanıcılar, karakterleri status ve gender filtreleri kullanarak arayabilirler.

```bash
npm install
# or
yarn install
#and
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Bu, [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) ile önyüklenen bir [Next.js](https://nextjs.org/) projesidir.

## Başlarken

Öncelikle geliştirme sunucusunu çalıştırın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

Sonucu görmek için tarayıcınızla [http://localhost:3000](http://localhost:3000) adresini açın.

`app/page.tsx` dosyasını değiştirerek sayfayı düzenlemeye başlayabilirsiniz. Dosyayı düzenlerken sayfa otomatik olarak güncellenir.

Bu proje, özel bir Google Fontu olan Inter'i otomatik olarak optimize etmek ve yüklemek için [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) kullanır.

## Daha Fazla Bilgi Edinin

Next.js hakkında daha fazla bilgi edinmek için aşağıdaki kaynaklara göz atın:

- [Next.js Belgeleri](https://nextjs.org/docs) - Next.js özellikleri ve API'si hakkında bilgi edinin.
- [Next.js'i Öğrenin](https://nextjs.org/learn) - etkileşimli bir Next.js eğitimi.

[Next.js GitHub deposuna](https://github.com/vercel/next.js/) göz atabilirsiniz - geri bildirimleriniz ve katkılarınız memnuniyetle karşılanır!

## Vercel'de Dağıtma

Next.js uygulamanızı dağıtmanın en kolay yolu, Next.js'nin yaratıcılarının [Vercel Platformunu](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) kullanmaktır.

Daha fazla ayrıntı için [Next.js dağıtım belgelerimize](https://nextjs.org/docs/deployment) göz atın.