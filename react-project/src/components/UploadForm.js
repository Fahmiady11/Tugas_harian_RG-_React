// TODO: answer here
import "../assets/css/UploadForm.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL } from "../api/config";
import axios from "axios";

export default function UploadForm({ post, setPosts }) {
  const [formValues, setFormValues] = useState('');
  const [images, setImages] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues(
      {
        ...formValues,
        [name]: value,
      }
    )
  }

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImages(image)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('content', formValues.content);
    data.append('image', images);
    try {
      await axios.post(`${API_URL}/post/create`, data, { withCredentials: true })
        .then(() => {
           //setPosts([...post, res.data.data])
          window.alert("berhasil dan refresh")
        })
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div className="Container-form" aria-label="Upload Form">
        <div className="modal-input-container">
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Caption :</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                onChange={handleInputChange}
                value={formValues.content ? formValues.content : ""}
                aria-label="Caption Input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Caption :</label>
              <input
                type="file"
                className="form-control"
                name="image"
                id="image"
                onChange={handleImageChange}
                aria-label="Image Input"
                accept="image/png, image/jpg, image/gif"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              aria-label="Submit Button"
            >Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}