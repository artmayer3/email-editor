import { useRef, useState } from 'react'
import EmailEditor, { EditorRef } from 'react-email-editor';
import saveAs from 'file-saver';
import { Bar, Container } from './Components';

function App() {
  const emailEditorRef = useRef<EditorRef>(null);
  const [preview, setPreview] = useState(false);

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design: any) => {
      saveAs(
        new Blob([JSON.stringify(design)], { type: "text/plain;charset=utf-8" }),
        "design.json"
      );
    });
  };

  const loadDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.loadDesign(
      JSON.parse(
        prompt(
          "Please paste the design object here and click OK",
          "{}"
        ) || "{}"
      )
    );
  }

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      saveAs(new Blob([html], { type: "text/html" }), "index.html");
    });
  };

  const togglePreview = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (preview) {
      unlayer?.hidePreview();
      setPreview(false);
    } else {
      unlayer?.showPreview('desktop');
      setPreview(true);
    }
  };

  return (
    <Container>
      <Bar>
        <button onClick={togglePreview}>
          {preview ? 'Скрыть' : 'Показать'} высер
        </button>
        <button onClick={exportHtml}>Экспортировать высер</button>
        <button onClick={saveDesign}>Сохранить высер</button>
        <button onClick={loadDesign}>Загрузить высер</button>
      </Bar>

      <EmailEditor ref={emailEditorRef} />
    </Container>
  )
}

export default App
