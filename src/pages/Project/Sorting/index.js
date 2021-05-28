import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CustomSelect from "components/Select";
import {getProjectsCategories} from "store/projects/actions";

const projects = [
    {
        value: '',
        label: 'All projects',
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
        value: 'United Arab Emirates',
        label: 'United Arab Emirates',
        filter: 'location'
    },
    {
        value: 'Lebanon',
        label: 'Lebanon',
        filter: 'location'
    },
    {
        value: 'Saudi Arabia',
        label: 'Saudi Arabia',
        filter: 'location'
    },
    {
        value: 'Egypt',
        label: 'Egypt',
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

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.projects.categories.data);
    const defaultProject = projects.filter(project => project.value === defaultValues.category);
    const defaultLocation = locations.filter(project => project.value === defaultValues.location);
    const defaultSort = sort.filter(project => project.value === defaultValues.sort);

    useEffect(() => {
        if(!categories.length) {
            dispatch(getProjectsCategories());
        }
    }, [dispatch])

    useEffect(() => {
        if(!!categories.length) {
            for(let i = 0; i < categories.length; i++) {
                let newObj = {
                    value: categories[i].name,
                    label: categories[i].name,
                    filter: 'category'
                }
                projects.push(newObj);
            }
        }
    }, [categories]);

    return (
        <div className="projects-sort fade" id="project-sort">
            {
                !!categories.length
                ? (
                    <CustomSelect
                        options={projects}
                        callback={onChange}
                        defaultValue={defaultProject[0] || projects[0]}
                    />
                ) : null
            }
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