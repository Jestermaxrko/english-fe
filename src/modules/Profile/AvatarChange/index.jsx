import React, { useRef, useState, useEffect } from 'react';
import avatarPlaceholder from '../../../shared/media/avatar-placeholder.png';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { withApollo } from 'react-apollo';
import { graphql } from 'react-apollo';
import CropperPopup from './CropperPopup';

import { AVATAR_QUERY, UPLOAD_FILE } from '../query';

const styles = ({ color, breakpoints }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 15,
    [breakpoints.down('xs')]: {
      // display: 'none''
      marginRight: 0,
      marginBottom: 10,
      alignItems: 'center',
    }
  },
  image: {
    width: 250,
    minHeight: 200,
    maxHeight: 400,
    objectFit: 'cover'
  },
  input: {
    width: 0,
    hight: 0,
    position: 'absolute'
  },
  button: {
    padding: 0,
    height: 36,
    width: 250,
  },
  btnLabel: {
    width: '100%',
    height: 36
  },
  deleteButton: {
    backgroundColor: color.lightRed,
    color: color.red,
    marginRight: 10
  },
  saveButton: {
    color: color.green,
    backgroundColor: color.lightGreen
  },
  iconButton: {
    marginTop: 10,
    marginBottom: 5,
  },
});

const AvatarChange = ({ classes, mutate, client }) => {
  const [image, setImage] = useState(null);
  const [rawImage, setRawImage] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const data = await client.readQuery({ query: AVATAR_QUERY });
    setImage(data.me.avatar);
  };

  const onCloseCropper = () => setRawImage(null);

  const uploadImage = async ({ image, file }) => {
    const { data: { singleUpload } } = await mutate({ variables: { file } });
    const data = await client.readQuery({ query: AVATAR_QUERY });
    setImage(image);
    data.me.avatar = singleUpload;
    client.writeQuery({
      query: AVATAR_QUERY,
      data
    });
    onCloseCropper();
  };

  const onChangeFile = async ({ target: { validity, files } }) => {
    if (!validity.valid || !files[0]) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = e => {
      setRawImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.container}>
      <img className={classes.image} src={image || avatarPlaceholder} ref={imageRef} />

      <input
        onChange={onChangeFile}
        className={classes.input}
        accept="image/*"
        type='file'
        id='file'
        name='file' />

      <Button
        variant='contained'
        color='primary'
        fullWidth
        classes={{
          root: classes.button,
          label: classes.btnLabel
        }}
      >
        <label
          className='flex-row flex-align-center flex-justify-center full-width full-height pointer'
          htmlFor='file'>
          Change avatar
        </label>
      </Button>

      {rawImage &&
        <CropperPopup
          onClose={onCloseCropper}
          onUpload={uploadImage}
          rawImage={rawImage} />
      }
    </div>
  );
};

export default withApollo(graphql(UPLOAD_FILE)(withStyles(styles)(AvatarChange)));
