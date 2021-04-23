import routes from 'routes';

export default [
    {
        title: 'Services',
        url: routes.services,
        blank: false,
    },
    {
        title: 'About',
        url: routes.about,
        blank: false,
    },
    {
        title: 'Project',
        url: routes.project.index,
        blank: false,
    },
    {
        title: 'News',
        url: routes.news.index,
        blank: false,
    },
    {
        title: 'Contact us',
        url: routes.contact,
        blank: false,
    }
];