import routes from 'routes';

export default [
   {
        title: 'Menu',
        list: [
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
        ]
    },
    {
        title: 'Social',
        list: [
            {
                title: 'Facebook',
                url: 'https://www.facebook.com/',
                blank: true,
            },
            {
                title: 'Linkedin',
                url: 'https://www.linkedin.com/',
                blank: true,
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/',
                blank: true,
            },
            {
                title: 'Pinterest',
                url: 'https://www.pinterest.com/',
                blank: true,
            },
            {
                title: 'Twitter',
                url: 'https://twitter.com/',
                blank: true,
            }
        ]
    },
    {
        title: 'Offices',
        list: [
            {
                title: 'Dubai, UAE',
                url: routes.contact,
                blank: false,
            },
            {
                title: 'Abu Dhabi Branch',
                url: routes.contact,
                blank: false,
            },
            {
                title: 'Lebanon',
                url: routes.contact,
                blank: false,
            },
            {
                title: 'KSA',
                url: routes.contact,
                blank: false,
            },
            {
                title: 'Egypt',
                url: routes.contact,
                blank: false,
            },
            {
                title: 'Iraq',
                url: routes.contact,
                blank: false,
            }
        ]
    }
];