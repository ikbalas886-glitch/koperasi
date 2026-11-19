import React, { useState, useMemo } from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Receipt,
  Github,
  Search,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Wallet,
  TrendingUp,
  TrendingDown,
  Package,
  Award,
  Bell,
  BookOpen,
  Shirt,
  PenTool,
  Coffee,
  CreditCard,
  Banknote,
  UserPlus,
  ArrowUpRight,
  Copy,
  Check,
  Download,
  FolderGit2,
  Terminal,
  Menu,
  X,
  AlertCircle,
  Image as ImageIcon,
  PackagePlus,
  Sparkles
} from 'lucide-react';

// --- KOMPONEN VISUAL / ILUSTRASI PRODUK SEKOLAH BERKUALITAS TINGGI (INLINE SVG ARTWORK) ---
const ProductVisual = ({ type, className = 'w-full h-36' }) => {
  switch (type) {
    case 'batik':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-sky-700 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            <defs>
              <pattern id="batikPattern" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="5" fill="none" stroke="#fbbf24" strokeWidth="1.2" opacity="0.55" />
                <circle cx="12" cy="12" r="1.8" fill="#fde68a" opacity="0.8" />
                <path d="M0 12 L6 12 M18 12 L24 12 M12 0 L12 6 M12 18 L12 24" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="200" height="140" fill="url(#batikPattern)" />
            {/* Kemeja Batik */}
            <path d="M62 28 L82 20 L100 32 L118 20 L138 28 L156 54 L140 66 L132 54 L132 122 L68 122 L68 54 L60 66 L44 54 Z" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="2.5" />
            <path d="M62 28 L82 20 L100 32 L118 20 L138 28 L156 54 L140 66 L132 54 L132 122 L68 122 L68 54 L60 66 L44 54 Z" fill="url(#batikPattern)" />
            {/* Kerah & Kancing */}
            <path d="M82 20 L100 38 L90 46 L78 26 Z" fill="#f8fafc" />
            <path d="M118 20 L100 38 L110 46 L122 26 Z" fill="#f8fafc" />
            <line x1="100" y1="38" x2="100" y2="122" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="100" cy="54" r="2.2" fill="#fde047" />
            <circle cx="100" cy="74" r="2.2" fill="#fde047" />
            <circle cx="100" cy="94" r="2.2" fill="#fde047" />
          </svg>
        </div>
      );
    case 'pramuka':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Baju Seragam Pramuka Cokelat Muda */}
            <path d="M62 28 L82 20 L100 32 L118 20 L138 28 L156 54 L140 66 L132 54 L132 122 L68 122 L68 54 L60 66 L44 54 Z" fill="#c28e5c" stroke="#78350f" strokeWidth="2.5" />
            {/* Saku Dada */}
            <rect x="75" y="58" width="17" height="20" rx="2" fill="#b07d4b" stroke="#78350f" strokeWidth="1.5" />
            <rect x="108" y="58" width="17" height="20" rx="2" fill="#b07d4b" stroke="#78350f" strokeWidth="1.5" />
            {/* Hasduk Merah Putih */}
            <path d="M84 22 L100 42 L116 22 L107 48 L100 84 L93 48 Z" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <circle cx="100" cy="42" r="4.5" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'atribut':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Topi Sekolah Abu-Abu */}
            <ellipse cx="78" cy="78" rx="46" ry="14" fill="#334155" />
            <path d="M42 74 C42 42, 114 42, 114 74 Z" fill="#475569" stroke="#1e293b" strokeWidth="2" />
            <path d="M78 76 C98 76, 126 82, 134 90 C115 95, 86 92, 72 84 Z" fill="#1e293b" />
            <circle cx="78" cy="56" r="8" fill="#fbbf24" stroke="#1e293b" strokeWidth="1.5" />
            {/* Dasi OSIS SMA */}
            <polygon points="142,26 156,26 153,38 145,38" fill="#334155" />
            <polygon points="145,38 153,38 160,104 149,118 138,104" fill="#475569" stroke="#1e293b" strokeWidth="1.8" />
            <rect x="144" y="64" width="10" height="10" rx="2" fill="#38bdf8" />
          </svg>
        </div>
      );
    case 'buku':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Tumpukan Buku Tulis Sinar Dunia */}
            <rect x="46" y="34" width="84" height="92" rx="6" fill="#0284c7" stroke="#0369a1" strokeWidth="2" transform="rotate(-6 88 80)" />
            <rect x="64" y="26" width="86" height="94" rx="6" fill="#10b981" stroke="#047857" strokeWidth="2" />
            <rect x="64" y="26" width="14" height="94" rx="3" fill="#065f46" />
            {/* Label Buku Tulis */}
            <rect x="88" y="42" width="50" height="28" rx="4" fill="#ffffff" />
            <line x1="94" y1="51" x2="132" y2="51" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="94" y1="60" x2="122" y2="60" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="128" cy="96" r="12" fill="#fbbf24" />
            <text x="128" y="100" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">10x</text>
          </svg>
        </div>
      );
    case 'atk':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Tempat Pensil */}
            <rect x="44" y="54" width="68" height="58" rx="10" fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
            <rect x="44" y="68" width="68" height="12" fill="#818cf8" />
            {/* Pulpen & Pensil */}
            <g transform="rotate(-18 65 50)">
              <rect x="58" y="20" width="10" height="44" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
              <polygon points="58,20 68,20 63,10" fill="#fde68a" />
            </g>
            <g transform="rotate(14 88 50)">
              <rect x="82" y="18" width="10" height="46" rx="3" fill="#06b6d4" stroke="#0e7490" strokeWidth="1.5" />
              <polygon points="84,18 90,18 87,9" fill="#0f172a" />
            </g>
            {/* Penggaris & Penghapus */}
            <rect x="124" y="26" width="22" height="86" rx="3" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
            <line x1="124" y1="40" x2="132" y2="40" stroke="#78350f" strokeWidth="1.5" />
            <line x1="124" y1="54" x2="135" y2="54" stroke="#78350f" strokeWidth="1.5" />
            <line x1="124" y1="68" x2="132" y2="68" stroke="#78350f" strokeWidth="1.5" />
            <line x1="124" y1="82" x2="135" y2="82" stroke="#78350f" strokeWidth="1.5" />
            <rect x="154" y="84" width="22" height="28" rx="4" fill="#f43f5e" stroke="#9f1239" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'olahraga':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Kaos Olahraga Dry-Fit */}
            <path d="M62 28 L84 22 L100 32 L116 22 L138 28 L156 52 L140 64 L132 52 L132 120 L68 120 L68 52 L60 64 L44 52 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2.5" />
            <path d="M68 70 L132 70 L132 84 L68 84 Z" fill="#38bdf8" />
            <path d="M84 22 Q100 36 116 22" fill="none" stroke="#fde047" strokeWidth="3" />
            <circle cx="116" cy="50" r="6" fill="#fde047" />
          </svg>
        </div>
      );
    case 'roti':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Roti Gandum & Susu UHT */}
            <path d="M42 66 C36 46, 108 46, 102 66 L100 112 C100 116, 44 116, 44 112 Z" fill="#d97706" stroke="#92400e" strokeWidth="2" />
            <path d="M48 68 C44 54, 100 54, 96 68 L94 108 L50 108 Z" fill="#fde68a" />
            <circle cx="64" cy="80" r="2" fill="#b45309" />
            <circle cx="80" cy="88" r="2" fill="#b45309" />
            <circle cx="68" cy="96" r="2" fill="#b45309" />
            {/* Kotak Susu UHT */}
            <rect x="114" y="44" width="44" height="70" rx="5" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
            <rect x="114" y="64" width="44" height="28" fill="#0ea5e9" />
            <path d="M144 44 L154 22 L162 24" fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
            <text x="136" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">UHT</text>
          </svg>
        </div>
      );
    case 'jus':
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-orange-100 via-rose-100 to-amber-100 flex items-center justify-center`}>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Botol Jus Buah Segar */}
            <rect x="82" y="20" width="36" height="12" rx="3" fill="#f97316" />
            <path d="M86 32 L114 32 L124 54 L124 114 C124 120, 76 120, 76 114 L76 54 Z" fill="#fb923c" stroke="#c2410c" strokeWidth="2.5" />
            <rect x="76" y="66" width="48" height="32" fill="#fff7ed" />
            <circle cx="100" cy="82" r="11" fill="#f97316" />
            <path d="M100 71 Q108 65 112 72 Q105 76 100 71" fill="#16a34a" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={`${className} relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center`}>
          <Package className="w-12 h-12 text-slate-500" />
        </div>
      );
  }
};

// Pilihan Template Visual Produk untuk Modal Tambah Produk
const VISUAL_PRESETS = [
  { id: 'batik', label: 'Seragam Batik' },
  { id: 'pramuka', label: 'Seragam Pramuka' },
  { id: 'olahraga', label: 'Kaos Olahraga' },
  { id: 'atribut', label: 'Dasi & Topi OSIS' },
  { id: 'buku', label: 'Buku Tulis' },
  { id: 'atk', label: 'Pulpen & Tempat Pensil' },
  { id: 'roti', label: 'Roti Gandum & Susu UHT' },
  { id: 'jus', label: 'Jus Buah Segar' },
];

// --- DATA AWAL (REALISTIS KHAS SEKOLAH INDONESIA + VISUAL PRODUK) ---
const INITIAL_PRODUCTS = [
  {
    id: 'PRD-001',
    name: 'Seragam Batik Sekolah (Lengan Panjang)',
    category: 'Seragam',
    price: 115000,
    stock: 24,
    sold: 86,
    sku: 'SRG-BTK-01',
    visual: 'batik',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'PRD-002',
    name: 'Setelan Seragam Pramuka Lengkap + Hasduk',
    category: 'Seragam',
    price: 135000,
    stock: 20,
    sold: 92,
    sku: 'SRG-PRM-02',
    visual: 'pramuka',
    color: 'bg-amber-100 text-amber-800',
  },
  {
    id: 'PRD-003',
    name: 'Dasi & Topi Logo OSIS SMA',
    category: 'Atribut',
    price: 35000,
    stock: 45,
    sold: 142,
    sku: 'ATR-OSI-03',
    visual: 'atribut',
    color: 'bg-slate-200 text-slate-800',
  },
  {
    id: 'PRD-004',
    name: 'Buku Tulis Sinar Dunia (Pak Isi 10)',
    category: 'Buku',
    price: 44000,
    stock: 60,
    sold: 215,
    sku: 'BKU-SDU-04',
    visual: 'buku',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'PRD-005',
    name: 'Paket Pulpen Gel & Tempat Pensil Lengkap',
    category: 'Alat Tulis',
    price: 26000,
    stock: 50,
    sold: 190,
    sku: 'ATK-PLP-05',
    visual: 'atk',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'PRD-006',
    name: 'Kaos Olahraga Sekolah (Bahan Dry-Fit)',
    category: 'Seragam',
    price: 95000,
    stock: 18,
    sold: 74,
    sku: 'SRG-OLR-06',
    visual: 'olahraga',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'PRD-007',
    name: 'Paket Sarapan: Roti Gandum & Susu UHT',
    category: 'Snack Sehat',
    price: 12000,
    stock: 32,
    sold: 310,
    sku: 'SNK-SHT-07',
    visual: 'roti',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'PRD-008',
    name: 'Jus Buah Jeruk & Mangga Segar (Botol 350ml)',
    category: 'Snack Sehat',
    price: 8000,
    stock: 40,
    sold: 245,
    sku: 'SNK-JUS-08',
    visual: 'jus',
    color: 'bg-orange-100 text-orange-700',
  },
];

const INITIAL_MEMBERS = [
  {
    id: 'ANG-2026-001',
    nisNip: '242510089',
    name: 'Nabila Putri Ramadhani',
    role: 'Siswa - XI MIPA 2',
    simpananPokok: 50000,
    simpananWajib: 120000,
    simpananSukarela: 235000,
    joinedAt: '15 Jul 2025',
  },
  {
    id: 'ANG-2026-002',
    nisNip: '242510114',
    name: 'Muhammad Rizky Pratama',
    role: 'Siswa - XII IPS 1',
    simpananPokok: 50000,
    simpananWajib: 180000,
    simpananSukarela: 150000,
    joinedAt: '18 Jul 2024',
  },
  {
    id: 'ANG-2026-003',
    nisNip: '198405122010012008',
    name: 'Dra. Siti Aminah, M.Pd.',
    role: 'Guru - Ekonomi & Pembina Koperasi',
    simpananPokok: 100000,
    simpananWajib: 600000,
    simpananSukarela: 1250000,
    joinedAt: '10 Jan 2022',
  },
  {
    id: 'ANG-2026-004',
    nisNip: '252610042',
    name: 'Dimas Arya Saputra',
    role: 'Siswa - X Merdeka 4',
    simpananPokok: 50000,
    simpananWajib: 60000,
    simpananSukarela: 85000,
    joinedAt: '21 Jul 2026',
  },
  {
    id: 'ANG-2026-005',
    nisNip: '197911032008011004',
    name: 'Budi Santoso, S.Kom.',
    role: 'Guru - Informatika',
    simpananPokok: 100000,
    simpananWajib: 480000,
    simpananSukarela: 740000,
    joinedAt: '04 Agu 2023',
  },
];

const INITIAL_TRANSACTIONS = [
  {
    id: 'TRX-8901',
    date: '19 Nov 2026, 10:15',
    type: 'Penjualan',
    description: 'Pembelian Seragam Batik & Dasi OSIS (Nabila Putri)',
    method: 'Saldo Anggota',
    amount: 150000,
    flow: 'in',
  },
  {
    id: 'TRX-8900',
    date: '19 Nov 2026, 09:40',
    type: 'Simpanan',
    description: 'Setoran Simpanan Sukarela - Dra. Siti Aminah, M.Pd.',
    method: 'Tunai',
    amount: 250000,
    flow: 'in',
  },
  {
    id: 'TRX-8899',
    date: '18 Nov 2026, 13:20',
    type: 'Penjualan',
    description: 'Pembelian 2 Pak Buku Tulis & Paket ATK Ujian',
    method: 'Tunai',
    amount: 102000,
    flow: 'in',
  },
  {
    id: 'TRX-8898',
    date: '17 Nov 2026, 14:00',
    type: 'Pengeluaran',
    description: 'Restok Roti Gandum & Susu UHT dari Supplier Koperasi',
    method: 'Kas Koperasi',
    amount: 480000,
    flow: 'out',
  },
  {
    id: 'TRX-8897',
    date: '16 Nov 2026, 11:05',
    type: 'Simpanan',
    description: 'Simpanan Wajib Bulanan - Muhammad Rizky Pratama',
    method: 'Tunai',
    amount: 20000,
    flow: 'in',
  },
];

const ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Pembagian SHU (Sisa Hasil Usaha) Tahun Buku 2026',
    date: '18 Nov 2026',
    tag: 'Info Penting',
    desc: 'Rapat Anggota Tahunan (RAT) dan pembagian SHU akan dilaksanakan pada 12 Desember 2026 di Aula SMA Negeri 1.',
  },
  {
    id: 2,
    title: 'Stok Baru Seragam Batik & Kaos Olahraga Tersedia!',
    date: '15 Nov 2026',
    tag: 'Stok Masuk',
    desc: 'Ukuran S, M, L, XL, dan XXL sudah tersedia kembali di ruang koperasi atau dapat dipesan lewat kasir digital.',
  },
  {
    id: 3,
    title: 'Promo Paket Alat Tulis Penilaian Akhir Semester (PAS)',
    date: '10 Nov 2026',
    tag: 'Promo Siswa',
    desc: 'Diskon khusus untuk pembelian paket alat tulis ujian menggunakan Saldo Simpanan Sukarela anggota.',
  },
];

// Helper Format Rupiah
const formatRupiah = (angka) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
};

// Helper Ikon Kategori Produk
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Seragam':
      return <Shirt className="w-6 h-6" />;
    case 'Atribut':
      return <Award className="w-6 h-6" />;
    case 'Buku':
      return <BookOpen className="w-6 h-6" />;
    case 'Alat Tulis':
      return <PenTool className="w-6 h-6" />;
    case 'Snack Sehat':
      return <Coffee className="w-6 h-6" />;
    default:
      return <Package className="w-6 h-6" />;
  }
};

export default function App() {
  // Navigation & UI State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Core Data State
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [kasSaldo, setKasSaldo] = useState(14850000); // Saldo kas awal Rp 14.850.000

  // POS / Kasir State
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchProduct, setSearchProduct] = useState('');
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Tunai');
  const [selectedBuyerId, setSelectedBuyerId] = useState(INITIAL_MEMBERS[0].id);
  const [cashReceived, setCashReceived] = useState('');

  // Member & Savings Modal State
  const [searchMember, setSearchMember] = useState('');
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMember, setNewMember] = useState({
    nisNip: '',
    name: '',
    role: 'Siswa - X Merdeka 1',
    simpananPokok: 50000,
    simpananSukarela: 25000,
  });

  const [depositModalMember, setDepositModalMember] = useState(null);
  const [depositType, setDepositType] = useState('simpananSukarela');
  const [depositAmount, setDepositAmount] = useState('');

  // Transaction Filter State
  const [trxFilter, setTrxFilter] = useState('Semua');
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseForm, setExpenseForm] = useState({ description: '', amount: '' });

  // Add Product Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Alat Tulis',
    price: '',
    stock: '',
    sku: '',
    visual: 'atk',
  });

  // GitHub Guide Copy State
  const [copiedKey, setCopiedKey] = useState(null);

  // Notifikasi Toast Ringan (Pengganti alert)
  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // --- KALKULASI RINGKASAN ---
  const totalSimpananSeluruhAnggota = useMemo(() => {
    return members.reduce(
      (acc, m) => acc + m.simpananPokok + m.simpananWajib + m.simpananSukarela,
      0
    );
  }, [members]);

  const topProducts = useMemo(() => {
    return [...products].sort((a, b) => b.sold - a.sold).slice(0, 4);
  }, [products]);

  const financialSummary = useMemo(() => {
    const pemasukan = transactions
      .filter((t) => t.flow === 'in')
      .reduce((sum, t) => sum + t.amount, 0);
    const pengeluaran = transactions
      .filter((t) => t.flow === 'out')
      .reduce((sum, t) => sum + t.amount, 0);
    return { pemasukan, pengeluaran };
  }, [transactions]);

  // --- LOGIKA KASIR (POS) ---
  const categories = ['Semua', 'Seragam', 'Atribut', 'Buku', 'Alat Tulis', 'Snack Sehat'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat = selectedCategory === 'Semua' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchProduct.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, selectedCategory, searchProduct]);

  const addToCart = (product) => {
    if (product.stock <= 0) {
      triggerToast('Stok produk ini sedang habis!', 'error');
      return;
    }
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        if (existing.qty >= product.stock) {
          triggerToast(`Stok maksimal tersisa ${product.stock} unit`, 'error');
          return prev;
        }
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const productInfo = products.find((p) => p.id === productId);
            const nextQty = item.qty + delta;
            if (nextQty > (productInfo?.stock || 99)) {
              triggerToast('Melebihi batas stok tersedia!', 'error');
              return item;
            }
            return { ...item, qty: nextQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const buyer = members.find((m) => m.id === selectedBuyerId);

    if (paymentMethod === 'Saldo Anggota') {
      if (!buyer) {
        triggerToast('Pilih anggota terlebih dahulu!', 'error');
        return;
      }
      if (buyer.simpananSukarela < cartTotal) {
        triggerToast(
          `Saldo Simpanan Sukarela ${buyer.name} tidak mencukupi (${formatRupiah(
            buyer.simpananSukarela
          )})`,
          'error'
        );
        return;
      }
      // Potong saldo sukarela anggota
      setMembers((prev) =>
        prev.map((m) =>
          m.id === buyer.id
            ? { ...m, simpananSukarela: m.simpananSukarela - cartTotal }
            : m
        )
      );
    } else {
      const cashNum = Number(cashReceived);
      if (cashReceived && cashNum < cartTotal) {
        triggerToast('Nominal uang tunai kurang dari total belanja!', 'error');
        return;
      }
      setKasSaldo((prev) => prev + cartTotal);
    }

    // Kurangi stok & tambah jumlah terjual
    setProducts((prev) =>
      prev.map((prod) => {
        const inCart = cart.find((c) => c.id === prod.id);
        if (inCart) {
          return {
            ...prod,
            stock: prod.stock - inCart.qty,
            sold: prod.sold + inCart.qty,
          };
        }
        return prod;
      })
    );

    // Tambah riwayat transaksi
    const itemSummary = cart.map((c) => `${c.name} (${c.qty}x)`).join(', ');
    const newTrx = {
      id: `TRX-${Math.floor(8902 + Math.random() * 900)}`,
      date: 'Baru saja',
      type: 'Penjualan',
      description: `${itemSummary}${
        paymentMethod === 'Saldo Anggota' && buyer ? ` - ${buyer.name}` : ''
      }`,
      method: paymentMethod,
      amount: cartTotal,
      flow: 'in',
    };

    setTransactions((prev) => [newTrx, ...prev]);
    setCart([]);
    setCashReceived('');
    triggerToast(`Transaksi berhasil! Total ${formatRupiah(cartTotal)} tercatat.`);
  };

  // --- LOGIKA ANGGOTA & SIMPANAN ---
  const filteredMembers = useMemo(() => {
    return members.filter(
      (m) =>
        m.name.toLowerCase().includes(searchMember.toLowerCase()) ||
        m.nisNip.includes(searchMember) ||
        m.role.toLowerCase().includes(searchMember.toLowerCase())
    );
  }, [members, searchMember]);

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.nisNip.trim() || !newMember.name.trim()) {
      triggerToast('NIS/NIP dan Nama wajib diisi!', 'error');
      return;
    }

    const pokok = Number(newMember.simpananPokok) || 50000;
    const sukarela = Number(newMember.simpananSukarela) || 0;

    const created = {
      id: `ANG-2026-00${members.length + 1}`,
      nisNip: newMember.nisNip.trim(),
      name: newMember.name.trim(),
      role: newMember.role,
      simpananPokok: pokok,
      simpananWajib: 20000,
      simpananSukarela: sukarela,
      joinedAt: '19 Nov 2026',
    };

    const totalSetorAwal = pokok + 20000 + sukarela;

    setMembers((prev) => [created, ...prev]);
    setKasSaldo((prev) => prev + totalSetorAwal);
    setTransactions((prev) => [
      {
        id: `TRX-${Math.floor(9000 + Math.random() * 900)}`,
        date: 'Baru saja',
        type: 'Simpanan',
        description: `Pendaftaran Anggota Baru & Setoran Awal - ${created.name}`,
        method: 'Tunai',
        amount: totalSetorAwal,
        flow: 'in',
      },
      ...prev,
    ]);

    setNewMember({
      nisNip: '',
      name: '',
      role: 'Siswa - X Merdeka 1',
      simpananPokok: 50000,
      simpananSukarela: 25000,
    });
    setShowAddMemberModal(false);
    triggerToast(`Anggota baru ${created.name} berhasil ditambahkan!`);
  };

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    const amountNum = Number(depositAmount);
    if (!depositModalMember || amountNum <= 0) {
      triggerToast('Masukkan nominal setoran yang valid!', 'error');
      return;
    }

    const labelMap = {
      simpananWajib: 'Simpanan Wajib',
      simpananSukarela: 'Simpanan Sukarela',
      simpananPokok: 'Simpanan Pokok',
    };

    setMembers((prev) =>
      prev.map((m) =>
        m.id === depositModalMember.id
          ? { ...m, [depositType]: m[depositType] + amountNum }
          : m
      )
    );

    setKasSaldo((prev) => prev + amountNum);
    setTransactions((prev) => [
      {
        id: `TRX-${Math.floor(9000 + Math.random() * 900)}`,
        date: 'Baru saja',
        type: 'Simpanan',
        description: `Setor ${labelMap[depositType]} - ${depositModalMember.name}`,
        method: 'Tunai',
        amount: amountNum,
        flow: 'in',
      },
      ...prev,
    ]);

    triggerToast(
      `Setoran ${labelMap[depositType]} sebesar ${formatRupiah(amountNum)} berhasil!`
    );
    setDepositModalMember(null);
    setDepositAmount('');
  };

  // --- LOGIKA PENGELUARAN ---
  const handleAddExpense = (e) => {
    e.preventDefault();
    const amountNum = Number(expenseForm.amount);
    if (!expenseForm.description.trim() || amountNum <= 0) {
      triggerToast('Isi keterangan dan nominal pengeluaran dengan benar!', 'error');
      return;
    }
    setKasSaldo((prev) => prev - amountNum);
    setTransactions((prev) => [
      {
        id: `TRX-${Math.floor(9000 + Math.random() * 900)}`,
        date: 'Baru saja',
        type: 'Pengeluaran',
        description: expenseForm.description.trim(),
        method: 'Kas Koperasi',
        amount: amountNum,
        flow: 'out',
      },
      ...prev,
    ]);
    setExpenseForm({ description: '', amount: '' });
    setShowExpenseModal(false);
    triggerToast('Pengeluaran operasional koperasi berhasil dicatat.');
  };

  // --- LOGIKA TAMBAH PRODUK BARU ---
  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    const priceNum = Number(newProduct.price);
    const stockNum = Number(newProduct.stock);

    if (!newProduct.name.trim() || priceNum <= 0 || stockNum < 0) {
      triggerToast('Lengkapi nama produk, harga, dan stok dengan benar!', 'error');
      return;
    }

    const catColorMap = {
      Seragam: 'bg-blue-100 text-blue-700',
      Atribut: 'bg-amber-100 text-amber-800',
      Buku: 'bg-emerald-100 text-emerald-700',
      'Alat Tulis': 'bg-indigo-100 text-indigo-700',
      'Snack Sehat': 'bg-teal-100 text-teal-700',
    };

    const createdProduct = {
      id: `PRD-${String(products.length + 1).padStart(3, '0')}`,
      name: newProduct.name.trim(),
      category: newProduct.category,
      price: priceNum,
      stock: stockNum,
      sold: 0,
      sku:
        newProduct.sku.trim().toUpperCase() ||
        `KOP-${Math.floor(100 + Math.random() * 899)}`,
      visual: newProduct.visual,
      color: catColorMap[newProduct.category] || 'bg-slate-100 text-slate-700',
    };

    setProducts((prev) => [createdProduct, ...prev]);
    setNewProduct({
      name: '',
      category: 'Alat Tulis',
      price: '',
      stock: '',
      sku: '',
      visual: 'atk',
    });
    setShowAddProductModal(false);
    triggerToast(`Produk "${createdProduct.name}" berhasil ditambahkan ke katalog!`);
  };

  // --- LOGIKA COPY & DOWNLOAD UNTUK GITHUB ---
  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerToast('Kode / perintah berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const packageJsonSnippet = `{
  "name": "koperasi-sekolah-tunas-bangsa",
  "version": "1.0.0",
  "private": true,
  "description": "Sistem Informasi & Kasir (POS) Koperasi Siswa Tunas Bangsa SMA Negeri 1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.454.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "vite": "^5.4.8"
  }
}`;

  const readmeSnippet = `# 🏫 Koperasi Sekolah "Tunas Bangsa" - SMA Negeri 1

Aplikasi web manajemen **Koperasi Sekolah** berbasis **React + Tailwind CSS** yang dirancang modern, responsif, dan mudah digunakan oleh pengurus OSIS maupun pembina koperasi.

## ✨ Fitur Utama
- **Dashboard Interaktif**: Pantauan saldo kas real-time, total simpanan anggota, produk terlaris, dan papan pengumuman sekolah.
- **Kasir Digital (POS)**: Pencarian produk cepat, filter kategori (Seragam, Atribut, Buku, ATK, Snack Sehat), keranjang belanja, dan pembayaran Tunai atau potong **Saldo Simpanan Sukarela Anggota**.
- **Manajemen Anggota & Simpanan**: Pencatatan NIS/NIP siswa & guru, Simpanan Pokok, Simpanan Wajib, dan Simpanan Sukarela.
- **Riwayat Transaksi & Laporan Keuangan**: Rekap arus kas masuk & keluar dengan filter kategori transaksi.

## 🚀 Cara Menjalankan di Lokal
\`\`\`bash
npm install
npm run dev
\`\`\``;

  const gitCommandsSnippet = `# 1. Inisialisasi repositori Git lokal di folder proyek
git init

# 2. Tambahkan semua file proyek ke staging area
git add .

# 3. Buat commit pertama
git commit -m "feat: inisialisasi web koperasi sekolah Tunas Bangsa"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Hubungkan dengan repositori GitHub Anda (ganti USERNAME dengan akun Anda)
git remote add origin https://github.com/USERNAME/koperasi-sekolah-tunas-bangsa.git

# 6. Unggah (push) kode ke GitHub
git push -u origin main`;

  const downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast(`File ${filename} berhasil diunduh!`);
  };

  // Menu Navigasi
  const navItems = [
    { id: 'dashboard', label: 'Beranda', icon: LayoutDashboard },
    { id: 'pos', label: 'Katalog & Kasir', icon: ShoppingBag },
    { id: 'members', label: 'Anggota & Simpanan', icon: Users },
    { id: 'transactions', label: 'Keuangan & Riwayat', icon: Receipt },
    { id: 'github', label: 'Panduan GitHub', icon: Github },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* TOAST NOTIFICATION */}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border transition-all duration-300 ${
            toast.type === 'error'
              ? 'bg-rose-900 text-white border-rose-700'
              : 'bg-slate-900 text-white border-emerald-500/40'
          }`}
        >
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-30 bg-[#0f2942] text-white shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <div
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg tracking-tight text-white">
                    Koperasi Tunas Bangsa
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-slate-900">
                    SMAN 1
                  </span>
                </div>
                <p className="text-xs text-slate-300 hidden sm:block">
                  Sistem Informasi & Kasir Koperasi Siswa
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.id === 'pos' && cart.length > 0 && (
                      <span className="ml-1 px-1.5 py-0.2 text-xs font-bold rounded-full bg-amber-400 text-slate-900">
                        {cart.reduce((s, c) => s + c.qty, 0)}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {cart.length > 0 && (
                <button
                  onClick={() => setActiveTab('pos')}
                  className="relative p-2 rounded-lg bg-emerald-600 text-white"
                  aria-label="Keranjang"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold flex items-center justify-center">
                    {cart.reduce((s, c) => s + c.qty, 0)}
                  </span>
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:bg-white/10"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b1f33] border-t border-white/10 px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-500 text-white'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.id === 'pos' && cart.length > 0 && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-400 text-slate-900">
                      {cart.reduce((s, c) => s + c.qty, 0)} item
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* ========================================================= */}
        {/* TAB 1: DASHBOARD / BERANDA                                */}
        {/* ========================================================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Hero Banner Koperasi */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f2942] via-[#153b5e] to-emerald-800 text-white p-6 sm:p-8 shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-semibold mb-3">
                    <span>✨ Tahun Ajaran 2026/2027 • Dari Siswa, Oleh Siswa, Untuk Sekolah</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    Selamat Datang di Koperasi "Tunas Bangsa"
                  </h1>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Kelola transaksi perlengkapan sekolah, tabungan simpanan siswa & guru,
                    serta laporan keuangan koperasi secara transparan dan modern.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <button
                    onClick={() => setActiveTab('pos')}
                    className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm shadow-md flex items-center gap-2 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buka Kasir (POS)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('github')}
                    className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-sm flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Upload ke GitHub</span>
                  </button>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -right-12 -bottom-16 w-64 h-64 rounded-full bg-emerald-400/10 pointer-events-none" />
              <div className="absolute right-24 -top-12 w-40 h-40 rounded-full bg-amber-400/10 pointer-events-none" />
            </div>

            {/* 4 Kartu Statistik Utama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Saldo Kas Koperasi
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">
                  {formatRupiah(kasSaldo)}
                </div>
                <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Kas tunai aktif tersedia
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Total Simpanan Anggota
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0f2942] flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">
                  {formatRupiah(totalSimpananSeluruhAnggota)}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Pokok, Wajib & Sukarela
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Anggota Terdaftar
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">
                  {members.length} Anggota
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Siswa aktif & Dewan Guru
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Katalog Perlengkapan
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900">
                  {products.length} Jenis Barang
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Total stok {products.reduce((s, p) => s + p.stock, 0)} unit siap jual
                </p>
              </div>
            </div>

            {/* Grid 2 Kolom: Produk Terlaris & Papan Pengumuman */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Produk Terlaris */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Produk Terlaris Bulan Ini
                    </h2>
                    <p className="text-xs text-slate-500">
                      Perlengkapan sekolah paling banyak dibeli siswa
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('pos')}
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <span>Lihat Semua</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topProducts.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex flex-col rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all"
                    >
                      <div className="relative">
                        <ProductVisual type={item.visual} className="w-full h-28" />
                        <span className="absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-xs">
                          #{idx + 1} Terlaris
                        </span>
                        <span className="absolute top-2.5 right-2.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/75 text-white backdrop-blur-xs">
                          {item.sold} terjual
                        </span>
                      </div>
                      <div className="p-3.5 flex-1 flex flex-col justify-between">
                        <h3 className="font-bold text-sm text-slate-900 line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-extrabold text-emerald-700">
                            {formatRupiah(item.price)}
                          </span>
                          <span className="text-xs font-medium text-slate-500">
                            Stok: {item.stock}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengumuman Koperasi */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Papan Pengumuman</h2>
                    <p className="text-xs text-slate-500">Info pengurus & RAT</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {ANNOUNCEMENTS.map((ann) => (
                    <div
                      key={ann.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#0f2942] text-white">
                          {ann.tag}
                        </span>
                        <span className="text-xs text-slate-400">{ann.date}</span>
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 leading-snug">
                        {ann.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{ann.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: KATALOG PRODUK & KASIR (POS)                       */}
        {/* ========================================================= */}
        {activeTab === 'pos' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Kiri: Daftar Produk (2 Kolom) */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h1 className="text-xl font-bold text-slate-900">
                      Katalog Perlengkapan Sekolah
                    </h1>
                    <p className="text-xs text-slate-500">
                      Pilih produk bergambar di bawah untuk masuk ke keranjang kasir
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    {/* Pencarian */}
                    <div className="relative w-full sm:w-56">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Cari seragam, buku, SKU..."
                        value={searchProduct}
                        onChange={(e) => setSearchProduct(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    {/* Tombol Tambah Produk Baru */}
                    <button
                      onClick={() => setShowAddProductModal(true)}
                      className="px-4 py-2 rounded-xl bg-[#0f2942] hover:bg-[#193d61] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all shrink-0"
                    >
                      <PackagePlus className="w-4 h-4 text-amber-400" />
                      <span>Tambah Produk Baru</span>
                    </button>
                  </div>
                </div>

                {/* Filter Kategori */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedCategory === cat
                          ? 'bg-[#0f2942] text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Kartu Produk */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                  <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="font-semibold text-slate-700">Produk tidak ditemukan</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Coba ubah kata kunci pencarian atau pilih kategori lain.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => {
                    const inCartItem = cart.find((c) => c.id === product.id);
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          {/* Gambar / Ilustrasi Produk */}
                          <div className="relative overflow-hidden">
                            <div className="group-hover:scale-105 transition-transform duration-300">
                              <ProductVisual type={product.visual} className="w-full h-36" />
                            </div>
                            <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/90 text-slate-800 shadow-xs backdrop-blur-xs">
                              {product.category}
                            </span>
                            <span
                              className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs ${
                                product.stock > 5
                                  ? 'bg-emerald-600 text-white'
                                  : product.stock > 0
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'bg-rose-600 text-white'
                              }`}
                            >
                              Stok: {product.stock}
                            </span>
                          </div>

                          {/* Detail Nama & SKU Produk */}
                          <div className="p-4 pb-2">
                            <span className="text-[11px] font-mono font-semibold text-slate-400">
                              SKU: {product.sku}
                            </span>
                            <h3 className="font-bold text-slate-900 text-sm mt-0.5 leading-snug">
                              {product.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center justify-between px-4 pb-4 pt-2 border-t border-slate-100 mt-2">
                          <span className="text-base font-extrabold text-[#0f2942]">
                            {formatRupiah(product.price)}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            disabled={product.stock === 0}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                              product.stock === 0
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                            }`}
                          >
                            <Plus className="w-4 h-4" />
                            <span>
                              {inCartItem ? `Tambah (${inCartItem.qty})` : 'Tambah'}
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Kanan: Panel Kasir / Keranjang Belanja */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-5 sticky top-20 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0f2942] text-white flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 text-base">Kasir Koperasi</h2>
                    <p className="text-xs text-slate-500">Simulasi transaksi POS</p>
                  </div>
                </div>
                {cart.length > 0 && (
                  <button
                    onClick={() => setCart([])}
                    className="text-xs font-semibold text-rose-600 hover:underline"
                  >
                    Kosongkan
                  </button>
                )}
              </div>

              {/* Daftar Item di Keranjang */}
              {cart.length === 0 ? (
                <div className="py-10 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    Keranjang masih kosong
                  </p>
                  <p className="text-xs text-slate-400">
                    Pilih barang di samping untuk memulai transaksi.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                        <ProductVisual type={item.visual} className="w-full h-full" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-emerald-700 font-semibold">
                          {formatRupiah(item.price * item.qty)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Metode Pembayaran & Total */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Metode Pembayaran
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Tunai')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                        paymentMethod === 'Tunai'
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <Banknote className="w-4 h-4" />
                      <span>Tunai (Cash)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('Saldo Anggota')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                        paymentMethod === 'Saldo Anggota'
                          ? 'bg-blue-50 border-[#0f2942] text-[#0f2942]'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Saldo Anggota</span>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'Saldo Anggota' ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pilih Anggota Pembeli
                    </label>
                    <select
                      value={selectedBuyerId}
                      onChange={(e) => setSelectedBuyerId(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      {members.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name} (Saldo: {formatRupiah(m.simpananSukarela)})
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Uang Tunai Diterima (Opsional)
                    </label>
                    <input
                      type="number"
                      placeholder="Contoh: 150000"
                      value={cashReceived}
                      onChange={(e) => setCashReceived(e.target.value)}
                      className="w-full text-sm p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {Number(cashReceived) >= cartTotal && cartTotal > 0 && (
                      <p className="text-xs font-semibold text-emerald-700 mt-1">
                        Kembalian: {formatRupiah(Number(cashReceived) - cartTotal)}
                      </p>
                    )}
                  </div>
                )}

                <div className="bg-slate-900 text-white p-4 rounded-xl space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Total Item</span>
                    <span>{cart.reduce((s, i) => s + i.qty, 0)} unit</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-semibold">Total Bayar</span>
                    <span className="text-xl font-extrabold text-amber-400">
                      {formatRupiah(cartTotal)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                  className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                    cart.length === 0
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  Proses Pembayaran
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: MANAJEMEN ANGGOTA & SIMPANAN                       */}
        {/* ========================================================= */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            {/* Header & Tombol Tambah Anggota */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Data Anggota & Simpanan Koperasi
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kelola Simpanan Pokok, Simpanan Wajib, dan Simpanan Sukarela siswa & guru
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari nama, NIS/NIP, kelas..."
                    value={searchMember}
                    onChange={(e) => setSearchMember(e.target.value)}
                    className="w-full sm:w-64 pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button
                  onClick={() => setShowAddMemberModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#0f2942] hover:bg-[#193d61] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Tambah Anggota</span>
                </button>
              </div>
            </div>

            {/* Tabel Anggota Responsif */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <th className="py-3.5 px-4">Anggota & NIS/NIP</th>
                      <th className="py-3.5 px-4">Kelas / Jabatan</th>
                      <th className="py-3.5 px-4">Simpanan Pokok</th>
                      <th className="py-3.5 px-4">Simpanan Wajib</th>
                      <th className="py-3.5 px-4">Simpanan Sukarela</th>
                      <th className="py-3.5 px-4">Total Simpanan</th>
                      <th className="py-3.5 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredMembers.map((member) => {
                      const total =
                        member.simpananPokok +
                        member.simpananWajib +
                        member.simpananSukarela;
                      return (
                        <tr
                          key={member.id}
                          className="hover:bg-slate-50/80 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <p className="font-bold text-slate-900">{member.name}</p>
                            <p className="text-xs text-slate-500 font-mono">
                              NIS/NIP: {member.nisNip}
                            </p>
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg ${
                                member.role.startsWith('Guru')
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-blue-50 text-[#0f2942]'
                              }`}
                            >
                              {member.role}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-600">
                            {formatRupiah(member.simpananPokok)}
                          </td>
                          <td className="py-4 px-4 text-slate-600">
                            {formatRupiah(member.simpananWajib)}
                          </td>
                          <td className="py-4 px-4 font-semibold text-emerald-700">
                            {formatRupiah(member.simpananSukarela)}
                          </td>
                          <td className="py-4 px-4 font-extrabold text-slate-900">
                            {formatRupiah(total)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={() => setDepositModalMember(member)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs border border-emerald-200 transition-colors"
                            >
                              + Setor Simpanan
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: RIWAYAT TRANSAKSI & LAPORAN KEUANGAN               */}
        {/* ========================================================= */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* Ringkasan Arus Kas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase text-slate-500">
                    Total Pemasukan Tercatat
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-emerald-700">
                  {formatRupiah(financialSummary.pemasukan)}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase text-slate-500">
                    Total Pengeluaran Tercatat
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-rose-700">
                  {formatRupiah(financialSummary.pengeluaran)}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500">
                    Pencatatan Operasional
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    Catat pembelian stok barang atau biaya ATK pengurus koperasi.
                  </p>
                </div>
                <button
                  onClick={() => setShowExpenseModal(true)}
                  className="mt-3 w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all"
                >
                  + Catat Pengeluaran Kas
                </button>
              </div>
            </div>

            {/* Filter & Daftar Log Transaksi */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Log Riwayat Transaksi Koperasi
                  </h2>
                  <p className="text-xs text-slate-500">
                    Seluruh aktivitas penjualan kasir, simpanan anggota, dan pengeluaran
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Semua', 'Penjualan', 'Simpanan', 'Pengeluaran'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setTrxFilter(f)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        trxFilter === f
                          ? 'bg-[#0f2942] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {transactions
                  .filter((t) => trxFilter === 'Semua' || t.type === trxFilter)
                  .map((trx) => (
                    <div
                      key={trx.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            trx.flow === 'in'
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-rose-50 text-rose-600'
                          }`}
                        >
                          {trx.flow === 'in' ? (
                            <TrendingUp className="w-5 h-5" />
                          ) : (
                            <TrendingDown className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-500">
                              {trx.id}
                            </span>
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                trx.type === 'Penjualan'
                                  ? 'bg-blue-100 text-blue-800'
                                  : trx.type === 'Simpanan'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {trx.type}
                            </span>
                            <span className="text-xs text-slate-400">• {trx.date}</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-900 mt-1">
                            {trx.description}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Metode: {trx.method}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`text-base font-extrabold sm:text-right ${
                          trx.flow === 'in' ? 'text-emerald-700' : 'text-rose-600'
                        }`}
                      >
                        {trx.flow === 'in' ? '+' : '-'} {formatRupiah(trx.amount)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: PANDUAN UPLOAD KE GITHUB                           */}
        {/* ========================================================= */}
        {activeTab === 'github' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-900 to-[#0f2942] text-white p-6 sm:p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold">
                    Panduan Upload Proyek React ke GitHub
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Struktur repositori standar Vite + React + Tailwind CSS siap push
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Struktur Folder */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#0f2942] font-bold">
                  <FolderGit2 className="w-5 h-5 text-emerald-600" />
                  <h2>Struktur Folder Proyek</h2>
                </div>
                <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto">
{`koperasi-sekolah-tunas-bangsa/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        <-- Kode utama ini
│   ├── main.jsx
│   └── index.css      <-- @tailwind directives
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── README.md`}
                </pre>
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => downloadFile('package.json', packageJsonSnippet)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh package.json</span>
                  </button>
                  <button
                    onClick={() => downloadFile('README.md', readmeSnippet)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh README.md</span>
                  </button>
                </div>
              </div>

              {/* Perintah Terminal Git */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#0f2942] font-bold">
                    <Terminal className="w-5 h-5 text-emerald-600" />
                    <h2>Langkah-Langkah Git Push ke GitHub</h2>
                  </div>
                  <button
                    onClick={() => copyToClipboard(gitCommandsSnippet, 'git')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-800"
                  >
                    {copiedKey === 'git' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Perintah</span>
                      </>
                    )}
                  </button>
                </div>

                <ol className="text-xs text-slate-600 space-y-1.5 list-decimal list-inside">
                  <li>
                    Buat proyek Vite React baru di komputer Anda dengan perintah{' '}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
                      npm create vite@latest koperasi-sekolah -- --template react
                    </code>
                    .
                  </li>
                  <li>
                    Salin seluruh kode aplikasi ini ke dalam file{' '}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
                      src/App.jsx
                    </code>{' '}
                    dan pasang ikon dengan{' '}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
                      npm install lucide-react
                    </code>
                    .
                  </li>
                  <li>
                    Buat repositori baru di akun GitHub Anda, lalu jalankan perintah terminal
                    berikut:
                  </li>
                </ol>

                <pre className="bg-slate-950 text-slate-100 p-4 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto border border-slate-800">
                  {gitCommandsSnippet}
                </pre>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-700">
                        Isi File package.json
                      </span>
                      <button
                        onClick={() => copyToClipboard(packageJsonSnippet, 'pkg')}
                        className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedKey === 'pkg' ? 'Tersalin!' : 'Salin'}</span>
                      </button>
                    </div>
                    <pre className="bg-slate-900 text-amber-200 p-3 rounded-xl text-[11px] font-mono h-36 overflow-auto">
                      {packageJsonSnippet}
                    </pre>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-700">
                        Isi File README.md
                      </span>
                      <button
                        onClick={() => copyToClipboard(readmeSnippet, 'readme')}
                        className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedKey === 'readme' ? 'Tersalin!' : 'Salin'}</span>
                      </button>
                    </div>
                    <pre className="bg-slate-900 text-sky-200 p-3 rounded-xl text-[11px] font-mono h-36 overflow-auto">
                      {readmeSnippet}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================= */}
      {/* MODAL 1: TAMBAH ANGGOTA BARU                              */}
      {/* ========================================================= */}
      {showAddMemberModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                Registrasi Anggota Koperasi
              </h3>
              <button
                onClick={() => setShowAddMemberModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  NIS (Siswa) atau NIP (Guru/Staf)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 252610199"
                  value={newMember.nisNip}
                  onChange={(e) =>
                    setNewMember({ ...newMember, nisNip: e.target.value })
                  }
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Zahra Aulia Putri"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kelas atau Jabatan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Siswa - XI IPS 2 atau Guru - Matematika"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Simpanan Pokok (Rp)
                  </label>
                  <input
                    type="number"
                    value={newMember.simpananPokok}
                    onChange={(e) =>
                      setNewMember({ ...newMember, simpananPokok: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Simpanan Sukarela Awal
                  </label>
                  <input
                    type="number"
                    value={newMember.simpananSukarela}
                    onChange={(e) =>
                      setNewMember({ ...newMember, simpananSukarela: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddMemberModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                >
                  Simpan Anggota
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: SETOR SIMPANAN ANGGOTA                           */}
      {/* ========================================================= */}
      {depositModalMember && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Setor Simpanan</h3>
                <p className="text-xs text-slate-500">{depositModalMember.name}</p>
              </div>
              <button
                onClick={() => setDepositModalMember(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleDepositSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jenis Simpanan
                </label>
                <select
                  value={depositType}
                  onChange={(e) => setDepositType(e.target.value)}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 font-medium"
                >
                  <option value="simpananSukarela">
                    Simpanan Sukarela (Bisa dipakai belanja di kasir)
                  </option>
                  <option value="simpananWajib">Simpanan Wajib Bulanan</option>
                  <option value="simpananPokok">Simpanan Pokok</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominal Setoran (Rp)
                </label>
                <input
                  type="number"
                  required
                  min="1000"
                  placeholder="Contoh: 50000"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="flex gap-2 mt-2">
                  {[20000, 50000, 100000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setDepositAmount(String(preset))}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
                    >
                      +{formatRupiah(preset)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setDepositModalMember(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0f2942] hover:bg-[#193d61] text-white"
                >
                  Konfirmasi Setoran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: CATAT PENGELUARAN KAS                            */}
      {/* ========================================================= */}
      {showExpenseModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                Catat Pengeluaran Operasional
              </h3>
              <button
                onClick={() => setShowExpenseModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Keterangan Pengeluaran
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kulakan 50 pak buku tulis & pulpen"
                  value={expenseForm.description}
                  onChange={(e) =>
                    setExpenseForm({ ...expenseForm, description: e.target.value })
                  }
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominal Keluar (Rp)
                </label>
                <input
                  type="number"
                  required
                  min="1000"
                  placeholder="Contoh: 350000"
                  value={expenseForm.amount}
                  onChange={(e) =>
                    setExpenseForm({ ...expenseForm, amount: e.target.value })
                  }
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowExpenseModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                >
                  Simpan Pengeluaran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: TAMBAH PRODUK BARU (DENGAN PILIHAN GAMBAR/VISUAL) */}
      {/* ========================================================= */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0f2942] text-amber-400 flex items-center justify-center">
                  <PackagePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Tambah Produk Koperasi Baru
                  </h3>
                  <p className="text-xs text-slate-500">
                    Lengkapi foto ilustrasi, kategori, harga & stok barang
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddProductModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProductSubmit} className="space-y-4">
              {/* Preview & Pilihan Gambar Produk */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pilih Gambar / Ilustrasi Produk</span>
                </label>
                <div className="rounded-xl overflow-hidden border border-slate-200 mb-2.5">
                  <ProductVisual type={newProduct.visual} className="w-full h-32" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {VISUAL_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() =>
                        setNewProduct({ ...newProduct, visual: preset.id })
                      }
                      className={`p-2 rounded-xl text-[11px] font-semibold border text-left transition-all ${
                        newProduct.visual === preset.id
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-1 ring-emerald-500'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Barang / Produk
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Buku Gambar A3 & Pensil Warna"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, category: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 font-medium"
                  >
                    <option value="Seragam">Seragam</option>
                    <option value="Atribut">Atribut</option>
                    <option value="Buku">Buku</option>
                    <option value="Alat Tulis">Alat Tulis</option>
                    <option value="Snack Sehat">Snack Sehat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kode SKU (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: BKU-GMB-09"
                    value={newProduct.sku}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, sku: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200 uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harga Jual (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min="500"
                    placeholder="Contoh: 25000"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Stok Awal (Unit)
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="Contoh: 30"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, stock: e.target.value })
                    }
                    className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                >
                  Simpan ke Katalog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © 2026 <strong className="text-slate-700">Koperasi Siswa "Tunas Bangsa"</strong> —
            SMA Negeri 1. Dibangun dengan React & Tailwind CSS.
          </p>
          <button
            onClick={() => setActiveTab('github')}
            className="inline-flex items-center gap-1.5 font-semibold text-[#0f2942] hover:text-emerald-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Lihat Panduan Repositori GitHub</span>
          </button>
        </div>
      </footer>
    </div>
  );
}