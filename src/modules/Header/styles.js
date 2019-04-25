export const styles = ({ color, breakpoints }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    // [breakpoints.down('xs')]: {
    //   display: 'none'
    // },
  },
  link: {
    display: 'flex',
    // flex: 1,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    color: '#fff',
    backgroundColor: color.primary,
    transition: 'background-color 0.5s ease',
    borderRight: '1px solid #90929a',
    '&:hover': {
      // opacity: 0.7,
      backgroundColor: color.darkPrimary,
      color: color.light
    }
  },
  activeLink: {
    backgroundColor: color.orange,
    color: color.primary,
    '&:hover': {
      backgroundColor: color.darkOrange,
      transition: 'background-color 0.5s ease',
    }
  },
  button: {
    padding: 3,
    marginRight: 5
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  icon: {
    color: color.primary,
  },
  title: {
    [breakpoints.down('xs')]: {
      display: 'none'
    },
  }
});
