import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from "components/Select";

const projects = [
    {
        value: '',
        label: 'All projects',
        filter: 'category'
    },
    {
        value: 'Major Projects',
        label: 'Major Projects',
        filter: 'category'
    },
    {
        value: 'Urban Planning',
        label: 'Urban Planning',
        filter: 'category'
    },
    {
        value: 'Buildings',
        label: 'Buildings',
        filter: 'category'
    },
    {
        value: 'Logistics, E-Commerce & Industrial',
        label: 'Logistics, E-Commerce & Industrial',
        filter: 'category'
    },
    {
        value: 'Infrastructure & Roads',
        label: 'Infrastructure & Roads',
        filter: 'category'
    }
];
const locations = [
    {
        value: '',
        label: 'All locations',
        filter: 'location'
    },
    {
        value: 'UAE',
        label: 'UAE',
        filter: 'location'
    },
    {
        value: 'Lebanon',
        label: 'Lebanon',
        filter: 'location'
    },
    {
        value: 'KSA',
        label: 'KSA',
        filter: 'location'
    },
    {
        value: 'Egypt',
        label: 'Egypt',
        filter: 'location'
    },
    {
        value: 'Iraq',
        label: 'Iraq',
        filter: 'location'
    }
];
const sort = [
    {
        value: 'ASC',
        label: 'Date: from newest to oldest',
        filter: 'sort'
    },
    {
        value: 'DESC',
        label: 'Date: from oldest to newest',
        filter: 'sort'
    }
];

const ProjectsSort = ({ onChange, defaultValues }) => {

    const defaultProject = projects.filter(project => project.value === defaultValues.category);
    const defaultLocation = locations.filter(project => project.value === defaultValues.location);
    const defaultSort = sort.filter(project => project.value === defaultValues.sort);

    return (
        <div className="projects-sort fade" id="project-sort">
            <CustomSelect
                options={projects}
                callback={onChange}
                defaultValue={defaultProject[0] || projects[0]}
            />
            <CustomSelect
                options={locations}
                callback={onChange}
                defaultValue={defaultLocation[0] || locations[0]}
            />
            <CustomSelect
                options={sort}
                defaultValue={defaultSort[0] || {label: 'Sort by'}}
                callback={onChange}
            />
        </div>
    )
};

export default ProjectsSort;

ProjectsSort.propTypes = {
    onChange: PropTypes.func.isRequired,
    defaultValues: PropTypes.object
};