import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useMovies } from "../components/MoviesContext.jsx";
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  id: Yup.number()
    .required('ID is required')
    .positive('ID must be positive')
    .integer('ID must be an integer'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  videoLink: Yup.string().url('Must be a valid URL').required('Video link is required'),
  backgroundImage: Yup.string().url('Must be a valid URL').required('Background image is required'),
  genre: Yup.string().required('Genre is required'),
});

const Newmovie = () => {
  const { addMovie, moviesData } = useMovies();
  // derive genre list dynamically
  const genreOptions = moviesData.map(g => g.genre);

  const handleSubmit = async (values, { resetForm }) => {
    const newMovie = {
      id: values.id,
      name: values.name,
      description: values.description,
      videoLink: values.videoLink,
      backgroundImage: values.backgroundImage,
      rating: 0,
      comments: [],
      duration: 0
    };

    const success = await addMovie(values.genre, newMovie);
    if (success) {
      toast.success('Movie added successfully');
      resetForm();
    } else {
      toast.error('Failed to add movie');
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white py-8 rounded-3xl border-amber-50 border-2">
      <center>
        <h1 className='text-2xl font-bold mb-8'>Add a new movie</h1>
        <Formik
          initialValues={{ id: '', name: '', description: '', videoLink: '', backgroundImage: '', genre: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6 w-1/2">
              {/* ID Field */}
              <label htmlFor="id" className="text-left text-amber-50">Movie ID</label>
              <Field type="number" name="id" className="px-3 py-2 rounded-3xl text-amber-50 border-4 border-amber-50" />
              <ErrorMessage name="id" component="div" className="text-red-400 text-sm" />

              {/* Name Field */}
              <label htmlFor="name" className="text-left text-amber-50">Movie Name</label>
              <Field type="text" name="name" className="px-3 py-2 rounded-3xl text-amber-50 border-4 border-amber-50" />
              <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />

              {/* Description Field */}
              <label htmlFor="description" className="text-left text-amber-50">Description</label>
              <Field as="textarea" name="description" className="px-3 py-2 rounded-3xl text-amber-50 border-4 border-amber-50" />
              <ErrorMessage name="description" component="div" className="text-red-400 text-sm" />

              {/* Video Link Field */}
              <label htmlFor="videoLink" className="text-left text-amber-50">Video Link</label>
              <Field type="url" name="videoLink" className="px-3 py-2 rounded-3xl text-amber-50 border-4 border-amber-50" />
              <ErrorMessage name="videoLink" component="div" className="text-red-400 text-sm" />

              {/* Background Image Field */}
              <label htmlFor="backgroundImage" className="text-left text-amber-50">Background Image URL</label>
              <Field type="url" name="backgroundImage" className="px-3 py-2 rounded-3xl text-amber-50 border-4 border-amber-50" />
              <ErrorMessage name="backgroundImage" component="div" className="text-red-400 text-sm" />

              {/* Dynamic Genre Selection */}
              <label htmlFor="genre" className="text-left text-amber-50">Genre</label>
              <Field as="select" name="genre" className="px-3 py-2 rounded-3xl text-amber-50 bg-gray-800 border-4 border-amber-50">
                <option value="">Select a genre</option>
                {genreOptions.map(g => (
                  <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
                ))}
              </Field>
              <ErrorMessage name="genre" component="div" className="text-red-400 text-sm" />

              <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded">
                {isSubmitting ? 'Adding...' : 'Add Movie'}
              </button>
            </Form>
          )}
        </Formik>
      </center>
    </div>
  );
};

export default Newmovie;