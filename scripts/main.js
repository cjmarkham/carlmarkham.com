const pages = {
  index: {
    name: 'index',
    crumbs: 'index.ts',
    title: 'index.ts',
    language: 'TypeScript',
  },
  fog: {
    name: 'fog',
    crumbs: 'jobs > fog.php',
    title: 'fog.php',
    language: 'PHP',
  },
  givey: {
    name: 'givey',
    crumbs: 'jobs > givey.rb',
    title: 'givey.rb',
    language: 'Ruby',
  },
  moltin: {
    name: 'moltin',
    crumbs: 'jobs > moltin.ts',
    title: 'moltin.ts',
    language: 'TypeScript',
  },
  env: {
    name: '.env',
    crumbs: '.env',
    title: '.env',
    language: 'Plain Text',
  },
  gitignore: {
    name: '.gitignore',
    crumbs: '.gitignore',
    title: '.gitignore',
    language: 'Plain Text',
  },
  tools: {
    name: 'tools.json',
    crumbs: 'tools.json',
    title: 'tools.json',
    language: 'JSON',
  },
}

const showTab = (name) => {
  const target = document.getElementById('text').getElementsByClassName(name)[0]
  const otherPages = document.getElementById('text').getElementsByTagName('pre')
  const sidebar = document.getElementById('sidebar')
  const sidebarLinks = sidebar.getElementsByTagName('li')
  const crumbs = document.getElementById('breadcrumbs')
  const tabWrapper = document.getElementById('tab-wrapper')
  const tabs = tabWrapper.getElementsByClassName('tab')
  const page = pages[name]

  document.getElementById('language').innerText = page.language
  document.getElementById('title').getElementsByTagName('span')[0].innerText = page.title

  crumbs.innerText = page.crumbs

  for (let i = 0; i < otherPages.length; i++) {
    otherPages[i].classList.add('hide')
  }
  for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].classList.remove('active')
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active')
  }

  target.classList.remove('hide')
  tabWrapper.getElementsByClassName(name)[0].classList.add('active')
  sidebar.getElementsByClassName(name)[0].classList.add('active')
  window.location.hash = name
}

window.addEventListener('load', () => {
  const hash = window.location.hash
  if (hash !== '') {
    showTab(hash.replace('#', ''))
  } else {
    showTab('index')
    document.getElementById('sidebar').getElementsByClassName('index')[0].classList.add('active')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  let fullScreen = false

  document.getElementById('maximize').addEventListener('click', async () => {
    const el = document.getElementsByTagName('body')[0]

    if (!fullScreen) {
      await el.requestFullscreen()
      fullScreen = true
    } else {
      await document.exitFullscreen()
      fullScreen = false
    }
  })
})
