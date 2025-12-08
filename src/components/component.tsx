import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Technology',
      features: []
    }
  });

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const onSubmit = async (data: BusinessSpec) => {
    try {
      setSubmitting(true);
      await axios.post('/api/business-specifications', data);
      reset();
    } catch (error) {
      console.error('Error submitting business specification:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h4" gutterBottom>
        Create Business Specification
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="industry">Industry</InputLabel>
        <Controller
          name="industry"
          control={control}
          rules={{ required: 'Industry is required' }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="industry-label"
              id="industry"
              displayEmpty
              value={field.value || ''}
              inputProps={{
                'aria-label': 'Without label',
              }}
              error={!!errors.industry}
            >
              <MenuItem value="" disabled>
                <em>Select Industry</em>
              </MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              {/* Add more industries as needed */}
            </Select>
          )}
        />
        {errors.industry && (
          <FormHelperText error>{errors.industry.message}</FormHelperText>
        )}
      </FormControl>

      <Controller
        name="features"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Features (comma separated)"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <Box display="flex" justifyContent="space-between">
        <Button type="reset" onClick={() => reset()} color="primary">
          Reset
        </Button>
        <Button
          type="submit"
          disabled={loading || submitting}
          startIcon={submitting ? <CircularProgress size={20} /> : null}
          variant="contained"
          color="secondary"
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>

    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Technology',
      features: []
    }
  });

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const onSubmit = async (data: BusinessSpec) => {
    try {
      setSubmitting(true);
      await axios.post('/api/business-specifications', data);
      reset();
    } catch (error) {
      console.error('Error submitting business specification:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h4" gutterBottom>
        Create Business Specification
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Name"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Business Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            error={!!errors.description}
            helperText={errors.description?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="industry">Industry</InputLabel>
        <Controller
          name="industry"
          control={control}
          rules={{ required: 'Industry is required' }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="industry-label"
              id="industry"
              displayEmpty
              value={field.value || ''}
              inputProps={{
                'aria-label': 'Without label',
              }}
              error={!!errors.industry}
            >
              <MenuItem value="" disabled>
                <em>Select Industry</em>
              </MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              {/* Add more industries as needed */}
            </Select>
          )}
        />
        {errors.industry && (
          <FormHelperText error>{errors.industry.message}</FormHelperText>
        )}
      </FormControl>

      <Controller
        name="features"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Features (comma separated)"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        )}
      />

      <Box display="flex" justifyContent="space-between">
        <Button type="reset" onClick={() => reset()} color="primary">
          Reset
        </Button>
        <Button
          type="submit"
          disabled={loading || submitting}
          startIcon={submitting ? <CircularProgress size={20} /> : null}
          variant="contained"
          color="secondary"
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>

    </Box>
  );
};

export default CreateBusinessSpecification;