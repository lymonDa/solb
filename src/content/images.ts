export interface ImageAsset {
  src: string;
  fallbackSrc: string;
  width: number;
  height: number;
  altAr: string;
  altEn: string;
  captionAr: string;
  captionEn: string;
  status: "cleared" | "blocked" | "pending";
}

export const IMAGES: Record<string, ImageAsset> = {
  wallSawTrack09: {
    src: "/images/solb-wall-saw-track-09.webp",
    fallbackSrc: "/images/solb-wall-saw-track-09.jpg",
    width: 960,
    height: 1280,
    altAr: "منشار جداري على مسار مع شفرة ماسية كبيرة ووحدة تحكم رقمية",
    altEn: "Track-mounted wall saw with a large diamond blade and digital controller",
    captionAr: "معدة قص جداري على مسار مع شفرة ماسية (معدات صلب)",
    captionEn: "Track-mounted wall saw equipment with diamond blade (SOLB equipment)",
    status: "cleared",
  },
  coreDrillRed01: {
    src: "/images/solb-core-drill-red-01.webp",
    fallbackSrc: "/images/solb-core-drill-red-01.jpg",
    width: 959,
    height: 1280,
    altAr: "جهاز تخريم كور على حامل مع رؤوس تخريم ماسية ومضخة تبريد",
    altEn: "Core drilling rig on a stand with diamond core bits and cooling pump",
    captionAr: "معدة تخريم كور مع رؤوس ماسية متنوعة (معدات صلب)",
    captionEn: "Core drilling rig with diamond core bits (SOLB equipment)",
    status: "cleared",
  },
  coreDrillOrange02: {
    src: "/images/solb-core-drill-orange-02.webp",
    fallbackSrc: "/images/solb-core-drill-orange-02.jpg",
    width: 960,
    height: 1280,
    altAr: "جهاز تخريم كور برتقالي مع ملحقاته ورؤوس التخريم الماسية",
    altEn: "Orange core drilling rig with accessories and diamond core bits",
    captionAr: "معدة تخريم كور للأعمال الإنشائية والفتحات الدائرية",
    captionEn: "Core drilling rig for structural circular openings and MEP",
    status: "cleared",
  },
  wallSawStaircase06: {
    src: "/images/solb-wall-saw-staircase-06.webp",
    fallbackSrc: "/images/solb-wall-saw-staircase-06.jpg",
    width: 1062,
    height: 1132,
    altAr: "قص درج خرساني باستخدام منشار جداري على مسار بشفرة ماسية",
    altEn: "Concrete staircase cutting using a track-mounted wall saw with diamond blade",
    captionAr: "قص دقيق في عناصر خرسانية مسلحة بمعدات القص",
    captionEn: "Precision cutting in reinforced concrete elements with track saw",
    status: "cleared",
  },
  coreDrillSlab07: {
    src: "/images/solb-core-drill-slab-07.webp",
    fallbackSrc: "/images/solb-core-drill-slab-07.jpg",
    width: 796,
    height: 1600,
    altAr: "تخريم فتحات دائرية متجاورة في بلاطة خرسانية",
    altEn: "Core drilling adjacent holes in a concrete floor slab",
    captionAr: "تخريم دقيق في بلاطة خرسانية للأعمال الإنشائية",
    captionEn: "Precision core drilling in concrete slab for structural runs",
    status: "cleared",
  },
  coreDrillOpening05: {
    src: "/images/solb-core-drill-opening-05.webp",
    fallbackSrc: "/images/solb-core-drill-opening-05.jpg",
    width: 1073,
    height: 1352,
    altAr: "تنفيذ فتحة جدارية خرسانية باستخدام معدات التخريم الماسي",
    altEn: "Forming a concrete wall opening using diamond core equipment",
    captionAr: "عمل فتحة جدارية محددة بالخرسانة المسلحة",
    captionEn: "Forming a defined wall opening in reinforced concrete",
    status: "cleared",
  },
};
