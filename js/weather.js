;(function () {
  function applyWeatherPosition() {
    const container = document.getElementById('tp-weather-widget')
    if (!container) return

    container.style.position = 'fixed'
    container.style.left = '16px'
    container.style.top = '50%'
    container.style.transform = 'translateY(-50%)'
    container.style.zIndex = '30'
    container.style.maxWidth = '220px'

    if (window.innerWidth <= 768) {
      container.style.left = '8px'
      container.style.top = '72px'
      container.style.transform = 'none'
      container.style.maxWidth = 'calc(100vw - 16px)'
    }
  }

  function initWeather() {
    const container = document.getElementById('tp-weather-widget')
    if (!container) return

    applyWeatherPosition()

    ;(function (a, h, g, f, e, d, c, b) {
      b = function () {
        d = h.createElement(g)
        c = h.getElementsByTagName(g)[0]
        d.src = e
        d.charset = 'utf-8'
        d.async = 1
        c.parentNode.insertBefore(d, c)
      }
      a.SeniverseWeatherWidgetObject = f
      a[f] ||
        (a[f] = function () {
          ;(a[f].q = a[f].q || []).push(arguments)
        })
      a[f].l = +new Date()
      if (a.attachEvent) a.attachEvent('onload', b)
      else a.addEventListener('load', b, false)
    })(
      window,
      document,
      'script',
      'SeniverseWeatherWidget',
      '//cdn.sencdn.com/widget2/static/js/bundle.js?t=' +
        parseInt((new Date().getTime() / 100000000).toString(), 10)
    )

    window.SeniverseWeatherWidget('show', {
      flavor: 'bubble',
      location: 'WX4EQ2XJD7V2',
      geolocation: true,
      language: 'auto',
      unit: 'c',
      theme: 'auto',
      token: '4ebf5964-a3ba-4b8b-a106-bce0dd21e149',
      hover: 'enabled',
      container: 'tp-weather-widget'
    })
  }

  initWeather()
  document.addEventListener('pjax:complete', initWeather)
  window.addEventListener('resize', applyWeatherPosition)
})()
