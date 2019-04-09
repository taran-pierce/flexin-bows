module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/better-body': { page: '/workout', query: { title: 'better-body'} },
      '/advanced-conditioning': { page: '/workout', query: { title: 'advanced-conditioning'} },
      '/aerobic': { page: '/workout', query: { title: 'aerobic'} },
      '/anaerobic': { page: '/workout', query: { title: 'anaerobic'} },
      '/body-building': { page: '/workout', query: { title: 'body-building'} },
      '/strength-training': { page: '/workout', query: { title: 'strength-training'} },
      '/upper-lower-body': { page: '/workout', query: { title: 'upper-lower-body'} },
    }
  }
}