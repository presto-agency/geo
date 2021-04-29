import routes from 'routes';

export default [
    {
        title: 'Services',
        url: routes.services,
        displayOnMobile: false
    },
    {
        title: 'About',
        url: routes.about,
        displayOnMobile: false
    },
    {
        title: 'Project',
        url: routes.project.index,
        displayOnMobile: false
    },
    {
        title: 'News',
        url: routes.news.index,
        displayOnMobile: false
    },
    {
        title: 'Contact us',
        url: routes.contact,
        displayOnMobile: true
    }
]