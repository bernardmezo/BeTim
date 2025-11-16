"use client";

import { useState } from "react";
import { ThumbsUp, Laugh, Heart, Frown, Angry, Meh } from "lucide-react";

export default function SectionComment() {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emojis = [
    { icon: <ThumbsUp className="w-5 h-5" />, label: "Upvote" },
    { icon: <Laugh className="w-5 h-5" />, label: "Funny" },
    { icon: <Heart className="w-5 h-5" />, label: "Love" },
    { icon: <Meh className="w-5 h-5" />, label: "Surprised" },
    { icon: <Angry className="w-5 h-5" />, label: "Angry" },
    { icon: <Frown className="w-5 h-5" />, label: "Sad" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert("Semua kolom harus diisi dulu ya 😅");
      return;
    }

    console.log({
      emoji: selectedEmoji,
      name,
      email,
      comment,
    });

    setComment("");
    setName("");
    setEmail("");
    setSelectedEmoji(null);
    alert("Komentar berhasil dikirim (frontend demo) 🎉");
  };

  return (
    <section
      id="section-comment"
      className="bg-white text-gray-800 py-12 px-6 rounded-2xl shadow-md border border-gray-200 mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-[#129991]">
        What do you think?
      </h2>

      {/* Quick Emoji Reactions */}
      <div className="flex justify-center gap-5 mb-10 flex-wrap">
        {emojis.map((emo, i) => (
          <button
            key={i}
            onClick={() =>
              setSelectedEmoji(selectedEmoji === emo.label ? null : emo.label)
            }
            className={`p-3 rounded-full border-2 transition-all duration-200 ${
              selectedEmoji === emo.label
                ? "bg-[#129991] text-white border-[#129991]"
                : "border-gray-300 hover:border-[#129991] hover:text-[#129991]"
            }`}
            title={emo.label}
          >
            {emo.icon}
          </button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200"
      >
        {/* Comment Textarea */}
        <textarea
          className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#129991]"
          rows={4}
          placeholder="Tulis komentar kamu di sini..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#129991]"
            placeholder="Nama kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#129991]"
            placeholder="Email kamu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input
            type="checkbox"
            id="save-info"
            className="accent-[#129991] w-4 h-4"
          />
          <label htmlFor="save-info">
            Simpan nama dan email saya untuk komentar berikutnya.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#129991] hover:bg-[#0e827b] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md"
        >
          Kirim Komentar
        </button>
      </form>
    </section>
  );
}
