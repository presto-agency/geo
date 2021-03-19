import React from 'react';
import CustomSelect from "components/Select";

const locations = [
    {
      value: 'all',
      label: 'All locations'
    },
    {
        value: 'UAE',
        label: 'UAE'
    },
    {
        value: 'Lebanon',
        label: 'Lebanon'
    },
    {
        value: 'KSA',
        label: 'KSA'
    },
    {
        value: 'Egypt',
        label: 'Egypt'
    },
    {
        value: 'Iraq',
        label: 'Iraq'
    }
];
const projects = [
    {
        value: 'all',
        label: 'All projects'
    },
    {
        value: 'Major Projects',
        label: 'Major Projects'
    },
    {
        value: 'Urban Planning',
        label: 'Urban Planning'
    },
    {
        value: 'Buildings',
        label: 'Buildings'
    },
    {
        value: 'Logistics, E-Commerce & Industrial',
        label: 'Logistics, E-Commerce & Industrial'
    },
    {
        value: 'Infrastructure & Roads',
        label: 'Infrastructure & Roads'
    }
];
const sort = [
    {
        value: 'date_asc',
        label: 'Date: from newest to oldest'
    },
    {
        value: 'date_desc',
        label: 'Date: from oldest to newest'
    }
];

const ProjectsSort = () => {

    const handleLocationChange = (location) => {
        console.log('location - ', location);
    };

    const handleProjectsChange = (project) => {
        console.log('project - ', project);
    };

    const handleSortChange = (type) => {
        console.log('sort - ', type);
    };

    return (
        <div className="projects-sort fade">
            <CustomSelect options={projects} placeholder="All projects" callback={handleProjectsChange}  />
            <CustomSelect options={locations} placeholder="All locations" callback={handleLocationChange}  />
            <CustomSelect options={sort} placeholder="Sort by" callback={handleSortChange}  />
        </div>
    )
};

export default ProjectsSort;