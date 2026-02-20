import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import { BarChart3, Cpu, Settings, Car, Monitor, Zap, BookOpen, Hotel, Star, Plus } from 'lucide-react';

import Modal from './components/Modal';

function App() {
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '', category: 'Mesin' });

  // Initial Data
  const [categories, setCategories] = useState([
    {
      title: "Mesin",
      icon: Settings,
      links: [
        { title: "Laporan Harian TeFa", url: "https://docs.google.com/spreadsheets/d/1b8xNI9yULl3o058x9i2SAqJ-LG7OWiij/edit?usp=drivesdk&ouid=113057376523418415571&rtpof=true&sd=true" },
        { title: "Jurnal pembelajaran", url: "https://bit.ly/JURNAL_PEKAN_GENAP" },
        { title: "Adminitrasi Pemesinan", url: "https://drive.google.com/drive/folders/1wzseo8JZbIOOjr5sGM5cnSg9r_RzAayK?usp=sharing" },
        { title: "Kontrol Skill Passport", url: "https://bit.ly/SkillPassport-Mesin" },
        { title: "Weekly Report", url: "https://bit.ly/report_dpmi" },
        { title: "Report TeFa", url: "https://bit.ly/TEFA_Pemesinan" },
        { title: "Database Guru Tamu 2026", url: "https://docs.google.com/spreadsheets/d/1K8hJX1zZxuVgSbnjTOOCWIQ_vkLI1ttbGPOhrJMtlhE/edit?usp=sharing" },
        { title: "Database Guru Tamu 2026 NEW", url: "https://docs.google.com/spreadsheets/d/1_N0KA4OLQAoY-dpawZD-7_PduB_v2QPxRXiin7PHgKY/edit?usp=sharing" },
        { title: "Soal Ujikom 2026", url: "https://drive.google.com/drive/folders/1JquUAT6zW6vkJ-16-oAaKI6QsVVGpHVx?usp=sharing" },
        { title: "Kebutuhan Dana Yayasan", url: "https://docs.google.com/spreadsheets/d/1AF5nnqsgo6ssiFVJvgdiL4nptBEl2knV/edit?gid=517347938#gid=517347938" },
        { title: "Format Ajuan Dana BOS Jan-Jul 2026", url: "https://docs.google.com/spreadsheets/d/1vkJvFoDQFha_fmIYN7ERXwbMIva726xiPf4Q6vCOTnM/edit?gid=1549076464#gid=1549076464" },
      ]
    },
    {
      title: "Elind",
      icon: Cpu,
      links: [
        { title: "Google Drive Elind", url: "#" },
      ]
    },
    {
      title: "TKR",
      icon: Car,
      links: [
        { title: "Google Drive TKR", url: "#" },
      ]
    },
    {
      title: "TSM",
      icon: Settings,
      links: [
        { title: "Google Drive TSM", url: "#" },
      ]
    },
    {
      title: "TKI",
      icon: Monitor,
      links: [
        { title: "Google Drive TKI", url: "#" },
      ]
    },
    {
      title: "Listrik",
      icon: Zap,
      links: [
        { title: "Google Drive Listrik", url: "#" },
      ]
    },
    {
      title: "Akuntansi",
      icon: BookOpen,
      links: [
        { title: "Google Drive Akuntansi", url: "#" },
      ]
    },
    {
      title: "Hotel",
      icon: Hotel,
      links: [
        { title: "Google Drive Hotel", url: "#" },
      ]
    }
  ]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    // Logic to add link
    const updatedCategories = categories.map(cat => {
      if (cat.title === newLink.category) {
        return { ...cat, links: [...cat.links, { title: newLink.title, url: newLink.url }] };
      }
      return cat;
    });
    setCategories(updatedCategories);
    setNewLink({ title: '', url: '', category: 'Mesin' });
    setIsModalOpen(false);
  };

  // Filter Logic
  const filteredCategories = categories.map(cat => ({
    ...cat,
    links: cat.links.filter(link =>
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.links.length > 0);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="dashboard">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="category-grid">
          {filteredCategories.map((cat, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                title={cat.title}
                icon={cat.icon}
                links={cat.links}
              />
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
            <p>Tidak ada link yang sesuai dengan pencarian "{searchQuery}"</p>
          </div>
        )}
      </main>

      <button className="fab" onClick={() => setIsModalOpen(true)} title="Tambah Link">
        <Plus size={24} />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Tambah Link Baru"
      >
        <form onSubmit={handleAddLink}>
          <div className="form-group">
            <label className="form-label">Judul Link</label>
            <input
              type="text"
              className="form-input"
              required
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
              placeholder="Contoh: Laporan Harian"
            />
          </div>
          <div className="form-group">
            <label className="form-label">URL / Link</label>
            <input
              type="url"
              className="form-input"
              required
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              placeholder="https://..."
            />
          </div>
          <div className="form-group">
            <label className="form-label">Kategori</label>
            <select
              className="form-input"
              value={newLink.category}
              onChange={(e) => setNewLink({ ...newLink, category: e.target.value })}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.title}>{cat.title}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-primary">Simpan Link</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
