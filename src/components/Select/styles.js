export const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: 'none',
        borderColor: 'transparent',
        boxShadow: 'none',
        cursor: 'pointer',
        zIndex: 2
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#191B1D',
        borderRadius: 7,
        margin: '-44px -14px 0 -7px',
        padding: '40px 5px 5px 5px',
        boxShadow: 'none',
        filter: 'drop-shadow(0px 6px 34px rgba(0, 0, 0, 0.3))'
    }),
    option: (provided, state) => ({
        ...provided,
        color: '#FFFFFF',
        opacity: state.isSelected ? 1 : 0.25,
        backgroundColor: state.isFocused ? 'transparent' : 'transparent',
        transition: 'opacity .4s ease',
        cursor: 'pointer',
        paddingTop: 3,
        paddingBottom: 3,
        '&:hover': {
            opacity: 1
        }
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#FFFFFF'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        width: 36,
        height: 36,
        position: 'relative',
        'svg': {
            display: 'none'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '7px 6px 0 6px',
            borderColor: '#ffffff transparent transparent transparent',
            left: 12,
            top: 17
        }
    }),
    input: (provided) => ({
        ...provided,
        color: '#FFFFFF'
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#ffffff'
    }),
    // valueContainer: (provided) => ({
    //     ...provided,
    //     justifyContent: 'flex-end'
    // })
};