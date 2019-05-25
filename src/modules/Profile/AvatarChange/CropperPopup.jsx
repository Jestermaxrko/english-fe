import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ModalWindow from '@material-ui/core/Modal';
import Cropper from 'react-image-crop';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import LinearProgress from '@material-ui/core/LinearProgress';

import 'react-image-crop/lib/ReactCrop.scss';

const styles = ({ color }) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: 250,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: color.light,
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
  linearProgress: {
    top: 0,
    position: 'absolute',
    width: '100%'
  }
});

const initialCrop = {
  width: 250,
  height: 250,
  x: 0,
  y: 0
};

const CropperPopup = ({ classes, rawImage, onClose, onUpload }) => {
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState(initialCrop);
  const [imageRef, setImageRef] = useState(null);

  const getCroppedImg = async () => {
    setLoading(true);
    const canvas = document.createElement('canvas');
    const scaleX = imageRef.naturalWidth / imageRef.width;
    const scaleY = imageRef.naturalHeight / imageRef.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      imageRef,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const result = await new Promise((resolve) => {
      canvas.toBlob(blob => {
        if (!blob) return;
        blob.name = Date.now();
        const fileUrl = window.URL.createObjectURL(blob);
        resolve({ image: fileUrl, file: blob });
      }, 'image/png');
    });

    onUpload(result);

  };

  return (
    <ModalWindow open={!!rawImage} onClose={onClose}>
      <div className={classes.paper}>
        <Cropper
          locked
          keepSelection
          onChange={crop => setCrop(crop)}
          onImageLoaded={image => setImageRef(image)}
          crop={crop}
          imageStyle={{ maxHeight: 400 }}
          src={rawImage} />
        <div className='flex-row flex-justify-center relative'>
          {loading && <LinearProgress className={classes.linearProgress} />}
          <IconButton disabled={loading} onClick={onClose} className={`${classes.iconButton} ${classes.deleteButton}`}>
            <Close />
          </IconButton>
          <IconButton disabled={loading} onClick={getCroppedImg} className={`${classes.iconButton} ${classes.saveButton}`}>
            <Check />
          </IconButton>
        </div>
      </div>
    </ModalWindow>
  );
};

export default withStyles(styles)(CropperPopup);
