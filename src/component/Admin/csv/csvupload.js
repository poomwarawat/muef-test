import React from "react";
import Header from "../../Home/Header";
import { Container, Row, Col, Button, Input } from "reactstrap";
import ReactFileReader from "react-file-reader";
import Dropzone from "react-dropzone";
import csv from "csv";

const csvupload = () => {
  return (
    <div className="home-content">
      <Header />
      <Container>
        <div className="admin-page">
          <h1>Upload csv</h1>
          <div className="upload-area">
            <h3>กรุณาเลือกไฟล์</h3>
            <Dropzone
              onDrop={(acceptedFiles) => {
                const reader = new FileReader();
                reader.onload = () => {
                  csv.parse(reader.result, (err, data) => {
                    console.log(data);
                  });
                };

                reader.readAsBinaryString(acceptedFiles[0]);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default csvupload;
