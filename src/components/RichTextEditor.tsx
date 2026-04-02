"use client";

import { useState } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showToolbar, setShowToolbar] = useState(true);

  const insertMarkup = (before: string, after: string = "") => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || "text";
    const newContent = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newContent);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
    }, 0);
  };

  const formatters = [
    { label: "B", action: () => insertMarkup("<b>", "</b>"), title: "Bold" },
    { label: "I", action: () => insertMarkup("<i>", "</i>"), title: "Italic" },
    { label: "U", action: () => insertMarkup("<u>", "</u>"), title: "Underline" },
    { label: "H2", action: () => insertMarkup("<h2>", "</h2>"), title: "Heading 2" },
    { label: "H3", action: () => insertMarkup("<h3>", "</h3>"), title: "Heading 3" },
    { label: "P", action: () => insertMarkup("<p>", "</p>"), title: "Paragraph" },
    { label: "•", action: () => insertMarkup("<ul><li>", "</li></ul>"), title: "Bullet List" },
    { label: "1.", action: () => insertMarkup("<ol><li>", "</li></ol>"), title: "Numbered List" },
    { label: "Link", action: () => insertMarkup('<a href="#">', "</a>"), title: "Link" },
    { label: "Code", action: () => insertMarkup("<code>", "</code>"), title: "Code" },
  ];

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      {showToolbar && (
        <div className="flex flex-wrap gap-1 p-3 bg-gray-100 rounded-lg border border-gray-200">
          {formatters.map((fmt, idx) => (
            <button
              key={idx}
              onClick={fmt.action}
              title={fmt.title}
              type="button"
              className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors active:scale-95"
            >
              {fmt.label}
            </button>
          ))}
          <button
            onClick={() => setShowToolbar(false)}
            type="button"
            className="ml-auto px-2 py-1.5 text-xs text-gray-400 hover:text-gray-600"
            title="Hide toolbar"
          >
            ✕
          </button>
        </div>
      )}

      {/* Toggle Toolbar Button */}
      {!showToolbar && (
        <button
          onClick={() => setShowToolbar(true)}
          type="button"
          className="text-xs text-gray-400 hover:text-gray-600 mb-2"
        >
          Show formatting toolbar
        </button>
      )}

      {/* Textarea */}
      <textarea
        id="content-editor"
        name="content"
        rows={14}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#293C88] focus:border-transparent transition-all font-mono bg-white placeholder:text-gray-400"
      />

      {/* Help Text */}
      <div className="text-xs text-gray-500 space-y-1 mt-2">
        <p>💡 Supported HTML tags: &lt;p&gt; &lt;b&gt; &lt;i&gt; &lt;u&gt; &lt;h2&gt; &lt;h3&gt; &lt;ul&gt; &lt;ol&gt; &lt;li&gt; &lt;a&gt; &lt;code&gt;</p>
        <p>📸 Images in articles will automatically scale to fit all devices</p>
      </div>
    </div>
  );
}
