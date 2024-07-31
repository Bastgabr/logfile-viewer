import React from 'react';
import FileUploader from '../../components/FileUploader/index.tsx';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HomeWrapper = styled.div`
  height: calc(100vh - 100px);
  padding-top: 16px;
  background-color: #f8eded;
`;

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState('');

  let fileUploaderContent = (
    <FileUploader setUploadedFile={setUploadedFile}></FileUploader>
  );

  let fileViewer = <div>File viewer</div>;

  return (
    <HomeWrapper>
      {uploadedFile === '' ? fileUploaderContent : fileViewer}
    </HomeWrapper>
  );
};

export default Home;
