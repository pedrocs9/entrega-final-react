const productList = [
    {
      id: "1",
      name: "ASUS ROG STRIX RTX4090 24G",
      category: "Tarjetas",
      price: 2234690,
      description: "Video NVIDIA GeForce RTX4090 O24GB ROG Strix Gaming.",
      alt:
        "Video NVIDIA GeForce RTX4090 O24GB ROG Strix Gaming.",
      image:
        "https://media.solotodo.com/media/products/1667389_picture_1668513364.png",
    },
    {
      id: "2",
      name: "AMD Ryzen Threadripper 7980X",
      category: "Procesadores",
      price: 6374000,
      description: "AMD Ryzen Threadripper 7980X 350W SP6 128 Hilos 64-Core. ",
      alt:
        "AMD Ryzen Threadripper 7980X 350W SP6 128 Hilos 64-Core. ",
      image:
        "https://media.solotodo.com/media/products/1863203_picture_1705206477.jpg",
    },
    {
      id: "3",
      name: "Gigabyte TRX50 AERO D",
      category: "Placas",
      price: 815990,
      description: "Placa Madre Gigabyte TRX50 AERO D, EATX, DDR5, Supports AMD Ryzen Threadripper PRO 7000 series/ Ryzen. ",
      alt:
        "Placa Madre Gigabyte TRX50 AERO D, EATX, DDR5, Supports AMD Ryzen Threadripper PRO 7000 series/ Ryzen. ",
      image:
        "https://media.solotodo.com/media/products/1863331_picture_1705305365.png",
    },
    {
      id: "4",
      name: "Corsair Dominator Platinum RGB",
      category: "Ram",
      price: 449000,
      description: "Supere los límites del rendimiento con la memoria CORSAIR DOMINATOR PLATINUM RGB DDR5 optimizada para Intel®, aprovechando las frecuencias más altas y las mayores capacidades de DDR5, controladas con precisión a través del software CORSAIR iCUE.. ",
      alt:
        "Supere los límites del rendimiento con la memoria CORSAIR DOMINATOR PLATINUM RGB DDR5 optimizada para Intel. ",
      image:
        "https://media.solotodo.com/media/products/1524340_picture_1641881226.jpg",
    },
    {
      id: "5",
      name: "Western Digital Purple Pro 12 TB",
      category: "Discos",
      price: 315830,
      description: "Disco Duro Interno Western Digital Purple Pro 12TB 7200Rpm Cache 256MB Vigilancia [ WD121PURP ]. ",
      alt:
        "Disco Duro Interno Western Digital Purple Pro 12TB 7200Rpm Cache 256MB Vigilancia [ WD121PURP ]. ",
      image:
        "https://media.solotodo.com/media/products/1460421_picture_1632144401.jfif",
    },
    {
      id: "6",
      name: "Cougar Terminator",
      category: "Perifericos",
      price: 629990,
      description: "Silla Profesional Gamer Cougar Terminator. ",
      alt:
        "Silla Profesional Gamer Cougar Terminator. ",
      image:
        "https://media.solotodo.com/media/products/1771459_picture_1686849197.png",
    },
    {
      id: "7",
      name: "MSI GeForce RTX 4070 GAMING X SLIM 12G",
      category: "Tarjetas",
      price: 989000,
      description: "TARJETA DE VIDEO GEFORCE RTX 4070 TI GAMING X SLIM 12G GDDR6 SDRAM PCIEX 4.0 P/N RTX-4070TIXSLIM. ",
      alt:
        "TARJETA DE VIDEO GEFORCE RTX 4070 TI GAMING X SLIM 12G GDDR6 SDRAM PCIEX 4.0 P/N RTX-4070TIXSLIM. ",
      image:
        "https://media.solotodo.com/media/products/1812533_picture_1693997037.png",
    },
    {
      id: "8",
      name: "AMD Ryzen Threadripper Pro 5965WX",
      category: "Procesadores",
      price: 2749000,
      description: "AMD Ryzen Threadripper PRO 5965WX 48 Hilos 24-Core 3.8 GHz Socket sWRX8 280W 100-100000446WOF. ",
      alt:
        "AMD Ryzen Threadripper PRO 5965WX 48 Hilos 24-Core 3.8 GHz Socket sWRX8 280W 100-100000446WOF. ",
      image:
        "https://media.solotodo.com/media/products/1668936_picture_1668689909.jpg",
    },
    {
      id: "9",
      name: "ASRock Z390 Steel Legend",
      category: "Placas",
      price: 209900,
      description: "M.B. ASROCK Z390 STEEL LEGEND (LGA1151). ",
      alt:
        "M.B. ASROCK Z390 STEEL LEGEND (LGA1151). ",
      image:
        "https://media.solotodo.com/media/products/1063559_picture_1580353912.png",
    },
    {
      id: "10",
      name: "Kingston DDR5 ECC 128GB 6400MT/s",
      category: "Ram",
      price: 2234690,
      description: "Kingston DDR5 ECC 128GB 6400MT/s Fury Renegade Pro XMP 4x 32GB ECC Reg CL32 DIMM KF564R32RBK4-128.",
      alt:
        "Kingston DDR5 ECC 128GB 6400MT/s Fury Renegade Pro XMP 4x 32GB ECC Reg CL32 DIMM KF564R32RBK4-128.",
      image:
        "https://media.solotodo.com/media/products/1883223_picture_1708263100.jpg",
    },
    {
      id: "11",
      name: "Western Digital Red Plus 12 TB",
      category: "Discos",
      price: 324990,
      description: "Disco Duro Western Digital Red Plus 12TB, 3.5“, 7200rpm, SATA, 256MB de Cache, NAS. ",
      alt:
        "Disco Duro Western Digital Red Plus 12TB, 3.5“, 7200rpm, SATA, 256MB de Cache, NAS. ",
      image:
        "https://media.solotodo.com/media/products/1358563_picture_1617260849.jpg",
    },
    {
      id: "12",
      name: "Razer Basilisk V3 Pro - White",
      category: "Perifericos",
      price: 815990,
      description: "Mouse Razer Basilisk v3 Pro White Wireless. ",
      alt:
        "Mouse Razer Basilisk v3 Pro White Wireless. ",
      image:
        "https://media.solotodo.com/media/products/1812559_picture_1693998557.jpg",
    },
    {
      id: "13",
      name: "GALAX GeForce RTX 4070 Ti SUPER EX Gamer",
      category: "Tarjetas",
      price: 999000,
      description: "GALAX GeForce RTX 4070 Ti SUPER EX Gamer ",
      alt:
        "GALAX GeForce RTX 4070 Ti SUPER EX Gamer ",
      image:
        "https://media.solotodo.com/media/products/1871167_picture_1706163109.png",
    },
    {
      id: "14",
      name: "AMD Ryzen Threadripper 7980X",
      category: "Procesadores",
      price: 6374000,
      description: "AMD Ryzen Threadripper 7980X 350W SP6 128 Hilos 64-Core. ",
      alt:
        "AMD Ryzen Threadripper 7980X 350W SP6 128 Hilos 64-Core. ",
      image:
        "https://media.solotodo.com/media/products/1863203_picture_1705206477.jpg",
    },
    {
      id: "15",
      name: "Gigabyte Z590 GAMING X",
      category: "Placas",
      price: 207990,
      description: "M/B S1200 (Intel) - Gigabyte Z590 GAMING X - 4x DDR4 - ATX. ",
      alt:
        "M/B S1200 (Intel) - Gigabyte Z590 GAMING X - 4x DDR4 - ATX. ",
      image:
        "https://media.solotodo.com/media/products/1393063_picture_1621323257.jpg",
    },
    {
      id: "16",
      name: "Patriot Viper Steel RGB ",
      category: "Ram",
      price: 44900,
      description: "Patriot Viper Steel RGB PVSR416G360C0 (1 x 16GB | DIMM DDR4-3600). ",
      alt:
        "Patriot Viper Steel RGB PVSR416G360C0 (1 x 16GB | DIMM DDR4-3600). ",
      image:
        "https://media.solotodo.com/media/products/1629220_picture_1659177515.jpg",
    },
    {
      id: "17",
      name: "Seagate IronWolf 8 TB",
      category: "Discos",
      price: 225690,
      description: "Disco Duro NAS 8TB IronWolf. ",
      alt:
        "Disco Duro NAS 8TB IronWolf. ",
      image:
        "https://media.solotodo.com/media/products/1133282_picture_1587035084.jpg",
    },
    {
      id: "18",
      name: "Razer BlackWidow V3 Mini HyperSpeed Phantom Edition",
      category: "Perifericos",
      price: 309990,
      description: "Teclado Gamer - Razer Blackwidow V3 Mini Hyperspeed - Phantom Edition - Switches Yellow - 65% - Mecánico - RGB - Inglés - Black (RZ03-03891900-R3M1). ",
      alt:
        "Teclado Gamer - Razer Blackwidow V3 Mini Hyperspeed - Phantom Edition - Switches Yellow - 65% - Mecánico - RGB - Inglés - Black (RZ03-03891900-R3M1). ",
      image:
        "https://media.solotodo.com/media/products/1887936_picture_1709009759.jpg",
    },
    
  ];
  
  export default productList;
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productList);
      }, 100);
    })
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
        resolve(productList.filter(prod => prod.category === upperCategory));
      }, 500);
    });
  };