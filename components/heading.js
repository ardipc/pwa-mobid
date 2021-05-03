import Head from 'next/head'

export default function Heading(props) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icons/mobile-48.png" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />

      <link href="/_manifest.json" rel="manifest" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Mobid" />

      <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash/launch-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="750x1294" href="/splash/launch-750x1294.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="1242x2148" href="/splash/launch-1242x2148.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="1125x2436" href="/splash/launch-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="1536x2048" href="/splash/launch-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="1668x2224" href="/splash/launch-1668x2224.png" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" sizes="2048x2732" href="/splash/launch-2048x2732.png" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />

      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
      <script src="/js/app.js"></script>
    </Head>
  )
}
