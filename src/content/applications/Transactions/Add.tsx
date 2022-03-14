import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Box, DialogContent, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  // React-hook-form
  const { register, handleSubmit, setValue, trigger } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    register('body');
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Screensaver</DialogTitle>
      <DialogContent sx={{ width: 500 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Box>
                <Typography>Led screensaver video url</Typography>
                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden {...register('video')} />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <Typography>Screensaver Media url</Typography>
                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden {...register('media')} />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              {...register('title')}
              sx={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                setValue('body', editor.getData());
                trigger('body');
              }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

function Add() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{ mt: { xs: 2, md: 0 } }}
        variant="contained"
        startIcon={<AddTwoToneIcon fontSize="small" />}
      >
        Create
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default Add;
