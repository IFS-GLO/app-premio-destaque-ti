var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // Evento
  {
    path: '/event/',
    url: './pages/event.html',
    name: 'event',
  },
  // Programação
  {
    path: '/programming/',
    url: './pages/programming.html',
    name: 'programming',
  },
  // Projetos
  {
    path: '/projects/',
    url: './pages/projects.html',
    name: 'projects',
  },
  // Projeto
  {
    path: '/project/',
    url: './pages/project.html',
    name: 'project',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
