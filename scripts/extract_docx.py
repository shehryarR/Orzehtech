import zipfile
import xml.etree.ElementTree as ET
import os

files = [f for f in os.listdir('.') if f.endswith('.docx')]
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

for f in files:
    try:
        xml_content = zipfile.ZipFile(f).read('word/document.xml')
        root = ET.fromstring(xml_content)
        texts = []
        # Find paragraphs
        for p in root.iter(f'{{{ns["w"]}}}p'):
            p_texts = [t.text for t in p.iter(f'{{{ns["w"]}}}t') if t.text]
            if p_texts:
                texts.append("".join(p_texts))
        
        output_name = f.replace('.docx', '.txt')
        with open(output_name, 'w', encoding='utf-8') as out:
            out.write("\n".join(texts))
        print(f"Extracted {f} -> {output_name}")
    except Exception as e:
        print(f"Error parsing {f}: {e}")
