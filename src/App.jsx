import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import { BarChart3, Cpu, Settings, Car, Monitor, Zap, BookOpen, Hotel, Star, Plus } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');

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
        { title: "Drive Jurusan", url: "https://drive.google.com/drive/folders/145G-l-34NrIXxSkySXw13jmeYTqNBJQa?usp=sharing" },
        { title: "Absen", url: "https://www.appsheet.com/newshortcut/5fa76631-0102-42c9-b146-d44a8ba32fe5" },
        { title: "Email: tkro.mitra... (Pass: tkro2021)", url: "mailto:tkro.mitraindustrimm2100@gmail.com" },
        { title: "Zoom: tekni... (Pass: Mitra2021)", url: "https://zoom.us" },
        { title: "Link Drive", url: "https://bit.ly/3gLL6Zy" },
        { title: "Buku manual", url: "http://bit.ly/materi-otomotif" },
        { title: "Laporan Bos (Akun)", url: "https://bit.ly/DaftarAkunBOS" },
        { title: "Laporan Bos (Keu)", url: "https://bit.ly/LapKeuMI" },
        { title: "Skill Passport Basic X", url: "https://docs.google.com/spreadsheets/d/1U7027CJt-gotlKEPg1CgJtVCd8Jj1lDM/edit?usp=sharing&ouid=105582511323398209887&rtpof=true&sd=true" },
        { title: "Spesialisasi", url: "https://docs.google.com/spreadsheets/d/1_ESv8EBeQwYRA1V3ODHotXS1Gwb-p6TlFCx4eVO4ep0/edit?usp=sharing" },
        { title: "CP, ATP, Modul Fase E", url: "https://docs.google.com/spreadsheets/d/14CtszEOAKoQ9A-Pp7JvGBlYQxFn4Od5BZrqASf3aWes/edit?usp=sharing" },
        { title: "CP, ATP, Modul Fase F", url: "https://docs.google.com/spreadsheets/d/1e_afFmQJr_mk8ZEu5EUBa2M96j3w1lFjEfywZPJhLqw/edit?usp=sharing" },
        { title: "Laporan Guru Tamu", url: "https://docs.google.com/presentation/d/1PTrO4x82B7I3kYZ3z71LsdMw9KV-6f7fNhGAcha4UXg/edit?usp=sharing" },
        { title: "Dokumentasi Training", url: "https://drive.google.com/drive/folders/1D8N47xSrnboEm_OljN7KRAH71YaeiXba?usp=sharing" },
        { title: "Histori Kendaraan Servis", url: "https://docs.google.com/spreadsheets/d/1K8JwEFSrffJFDOB13qAISeGP5AhbNGqAgysDBSY3aNw/edit?usp=sharing" },
        { title: "Histori Kendaraan Op Sek", url: "https://docs.google.com/spreadsheets/d/1-oz8IRvz14wGbrnY41Lmv9rRIQpsr6kY1kw6iko7llI/edit?usp=sharing" },
        { title: "Temuan 5R", url: "https://webreport.smkind-mm2100.sch.id/dashboard" },
        { title: "PJBL TKR", url: "https://bit.ly/PJBL-TKR" },
        { title: "Web Skillpass", url: "https://skillpassmitra.netlify.app/" },
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
    </div>
  );
}

export default App;
