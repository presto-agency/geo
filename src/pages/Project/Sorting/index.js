import React from 'react';
import CustomSelect from "components/Select";

const locations = [
    {
      value: 'all',
      label: 'All locations'
    },
    {
        value: 'Iraq',
        label: 'Iraq'
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
    }
];
const projects = [
    {
        value: 'all',
        label: 'All projects'
    },
    {
        value: 'popular',
        label: 'Popular'
    },
    {
        value: 'latest',
        label: 'Latest'
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
    },
    {
        value: 'size_asc',
        label: 'Size: from largest to smallest'
    },
    {
        value: 'size_desc',
        label: 'Size: from smallest to largest'
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