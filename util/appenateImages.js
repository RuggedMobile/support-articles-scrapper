const images = [
  {
    id: 1,
    article_id: 1,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/09/image-1-1024x411.png",
    local_path: "downloaded_images/article_1_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:06.578559",
  },
  {
    id: 2,
    article_id: 1,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/09/image-2.png",
    local_path: "downloaded_images/article_1_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:06.761782",
  },
  {
    id: 3,
    article_id: 2,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nyHvM2HxHNY1w1i5VkqHasYnBpfQvF0OKQ.png",
    local_path: "downloaded_images/article_2_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:14.33073",
  },
  {
    id: 4,
    article_id: 4,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oaeoSDy2N2wlVJNgccas4LAe0E3DuoyPHg.png",
    local_path: "downloaded_images/article_4_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:28.730914",
  },
  {
    id: 5,
    article_id: 4,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/BNzJmx9bFmjAWxn51EbIW1_7lvU63Fzujw.png",
    local_path: "downloaded_images/article_4_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:29.25724",
  },
  {
    id: 6,
    article_id: 5,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/external-system-integration.png",
    local_path: "downloaded_images/article_5_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:37.459123",
  },
  {
    id: 7,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/testing-your-form-1.png",
    local_path: "downloaded_images/article_6_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:44.876713",
  },
  {
    id: 8,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/testing-your-form-2.png",
    local_path: "downloaded_images/article_6_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:45.230827",
  },
  {
    id: 9,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-35.png",
    local_path: "downloaded_images/article_6_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:45.41324",
  },
  {
    id: 10,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/GkGmARhRkZqPucIEtOkK4a3myw7pgRTS6Q.png",
    local_path: "downloaded_images/article_6_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:45.765299",
  },
  {
    id: 11,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/testing-your-form-4.png",
    local_path: "downloaded_images/article_6_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:45.946764",
  },
  {
    id: 12,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/testing-your-form-5-1.png",
    local_path: "downloaded_images/article_6_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:46.124913",
  },
  {
    id: 13,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-37.png",
    local_path: "downloaded_images/article_6_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:46.304023",
  },
  {
    id: 14,
    article_id: 6,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/testing-your-form-13.png",
    local_path: "downloaded_images/article_6_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:01:46.483975",
  },
  {
    id: 15,
    article_id: 9,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/forms-vs-screens-1-1-1024x467.png",
    local_path: "downloaded_images/article_9_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:07.551278",
  },
  {
    id: 16,
    article_id: 9,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128295136/original/xIH_GzzYm18nstswQ9fFAJf7JPSekIMRQg.png?1746453346",
    local_path: "downloaded_images/article_9_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:08.072535",
  },
  {
    id: 17,
    article_id: 9,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/forms-vs-screens-4-1024x505.png",
    local_path: "downloaded_images/article_9_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:08.420947",
  },
  {
    id: 18,
    article_id: 9,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/forms-vs-screens-3-1-1024x468.png",
    local_path: "downloaded_images/article_9_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:08.768453",
  },
  {
    id: 19,
    article_id: 11,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/YMoYwU0uh-dF4WoWjCTgU2HgA4s-tCzKJg.png",
    local_path: "downloaded_images/article_11_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:24.474904",
  },
  {
    id: 20,
    article_id: 12,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multi-language-1-2.png",
    local_path: "downloaded_images/article_12_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:33.629451",
  },
  {
    id: 21,
    article_id: 12,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multi-language-2-1-1024x333.png",
    local_path: "downloaded_images/article_12_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:33.808902",
  },
  {
    id: 22,
    article_id: 12,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11127191381/original/fy1lsW7wuOXASQDlHSOiUA1QTk18-ZwLjw.png?1743792675",
    local_path: "downloaded_images/article_12_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:34.375517",
  },
  {
    id: 23,
    article_id: 13,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-icons-1-1.png",
    local_path: "downloaded_images/article_13_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:41.981514",
  },
  {
    id: 24,
    article_id: 13,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-icons-2-1-1024x770.png",
    local_path: "downloaded_images/article_13_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:42.159801",
  },
  {
    id: 25,
    article_id: 13,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-icons-3-1024x728.png",
    local_path: "downloaded_images/article_13_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:42.33925",
  },
  {
    id: 26,
    article_id: 13,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-icons-4-1024x149.png",
    local_path: "downloaded_images/article_13_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:42.515975",
  },
  {
    id: 27,
    article_id: 13,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-icons-5-1024x139.png",
    local_path: "downloaded_images/article_13_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:42.692596",
  },
  {
    id: 28,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-1.png",
    local_path: "downloaded_images/article_14_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:50.226359",
  },
  {
    id: 29,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-2.png",
    local_path: "downloaded_images/article_14_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:50.404925",
  },
  {
    id: 30,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-3.png",
    local_path: "downloaded_images/article_14_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:50.584324",
  },
  {
    id: 31,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-4-1.png",
    local_path: "downloaded_images/article_14_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:50.797232",
  },
  {
    id: 32,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-5-1.png",
    local_path: "downloaded_images/article_14_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:50.974856",
  },
  {
    id: 33,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-6.png",
    local_path: "downloaded_images/article_14_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:51.151444",
  },
  {
    id: 34,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-7.png",
    local_path: "downloaded_images/article_14_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:51.329492",
  },
  {
    id: 35,
    article_id: 14,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/launching-your-app-8-1024x159.png",
    local_path: "downloaded_images/article_14_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:51.508071",
  },
  {
    id: 36,
    article_id: 15,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-72.png",
    local_path: "downloaded_images/article_15_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:58.930055",
  },
  {
    id: 37,
    article_id: 15,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-74-1024x107.png",
    local_path: "downloaded_images/article_15_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:59.107339",
  },
  {
    id: 38,
    article_id: 15,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-73.png",
    local_path: "downloaded_images/article_15_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:02:59.283389",
  },
  {
    id: 39,
    article_id: 16,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/OE6kiMXh_sELf_CuKDyQmxxBO3B9H9WAlQ.gif",
    local_path: "downloaded_images/article_16_img_0.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:08.445905",
  },
  {
    id: 40,
    article_id: 16,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sync-1024x486.png",
    local_path: "downloaded_images/article_16_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:08.622114",
  },
  {
    id: 41,
    article_id: 16,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/OpeA55tOXmmxmPb1cl4EXLn7uZYpP9qcPQ.gif",
    local_path: "downloaded_images/article_16_img_2.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:09.376504",
  },
  {
    id: 42,
    article_id: 17,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-11-123946.png",
    local_path: "downloaded_images/article_17_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:16.985236",
  },
  {
    id: 43,
    article_id: 17,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-76.png",
    local_path: "downloaded_images/article_17_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:17.17705",
  },
  {
    id: 44,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-131648.png",
    local_path: "downloaded_images/article_18_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:24.845376",
  },
  {
    id: 45,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-132526.png",
    local_path: "downloaded_images/article_18_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.021804",
  },
  {
    id: 46,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-131809.png",
    local_path: "downloaded_images/article_18_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.198629",
  },
  {
    id: 47,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-131948.png",
    local_path: "downloaded_images/article_18_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.375625",
  },
  {
    id: 48,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-132633.png",
    local_path: "downloaded_images/article_18_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.555585",
  },
  {
    id: 49,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-132721.png",
    local_path: "downloaded_images/article_18_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.732058",
  },
  {
    id: 50,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-10-131832.png",
    local_path: "downloaded_images/article_18_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:25.91356",
  },
  {
    id: 51,
    article_id: 18,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-70.png",
    local_path: "downloaded_images/article_18_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:26.088426",
  },
  {
    id: 52,
    article_id: 19,
    original_url: "https://help.appenate.com/wp-content/uploads/2025/04/55.png",
    local_path: "downloaded_images/article_19_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:33.354678",
  },
  {
    id: 53,
    article_id: 19,
    original_url: "https://help.appenate.com/wp-content/uploads/2025/04/66.png",
    local_path: "downloaded_images/article_19_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:33.702474",
  },
  {
    id: 54,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/QtH2B2xbOqWCdBzMe7Fp59CYA4V1b7XZIQ.png",
    local_path: "downloaded_images/article_20_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:42.353588",
  },
  {
    id: 55,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000039-1.png",
    local_path: "downloaded_images/article_20_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:42.544754",
  },
  {
    id: 56,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0513.png",
    local_path: "downloaded_images/article_20_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:42.72579",
  },
  {
    id: 57,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/111.png",
    local_path: "downloaded_images/article_20_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:42.903785",
  },
  {
    id: 58,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/222.png",
    local_path: "downloaded_images/article_20_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.082378",
  },
  {
    id: 59,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0614.png",
    local_path: "downloaded_images/article_20_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.262769",
  },
  {
    id: 60,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-58.png",
    local_path: "downloaded_images/article_20_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.440246",
  },
  {
    id: 61,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/333-1024x297.png",
    local_path: "downloaded_images/article_20_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.621313",
  },
  {
    id: 62,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Action-1-1024x166.png",
    local_path: "downloaded_images/article_20_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.799201",
  },
  {
    id: 63,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-59-1024x112.png",
    local_path: "downloaded_images/article_20_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:43.979159",
  },
  {
    id: 64,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03041-1-1024x114.png",
    local_path: "downloaded_images/article_20_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:44.155743",
  },
  {
    id: 65,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03221-1024x114.png",
    local_path: "downloaded_images/article_20_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:44.334994",
  },
  {
    id: 66,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0310-1024x136.png",
    local_path: "downloaded_images/article_20_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:44.519317",
  },
  {
    id: 67,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/btnAction-validationCondition-1024x134.png",
    local_path: "downloaded_images/article_20_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:44.70299",
  },
  {
    id: 68,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_24071-1024x136.png",
    local_path: "downloaded_images/article_20_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:44.88348",
  },
  {
    id: 69,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-60-1024x196.png",
    local_path: "downloaded_images/article_20_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:45.063733",
  },
  {
    id: 70,
    article_id: 20,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/444-1024x339.png",
    local_path: "downloaded_images/article_20_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:45.245998",
  },
  {
    id: 71,
    article_id: 22,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-56.png",
    local_path: "downloaded_images/article_22_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:58.813511",
  },
  {
    id: 72,
    article_id: 22,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0307-1.png",
    local_path: "downloaded_images/article_22_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:58.992169",
  },
  {
    id: 73,
    article_id: 22,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-55.png",
    local_path: "downloaded_images/article_22_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:59.169316",
  },
  {
    id: 74,
    article_id: 22,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-05-133408.png",
    local_path: "downloaded_images/article_22_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:59.34408",
  },
  {
    id: 75,
    article_id: 22,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/HUlH_YI9B7r9GjkpJZFnZn0AuHjhUP2S_g.png",
    local_path: "downloaded_images/article_22_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:03:59.518235",
  },
  {
    id: 76,
    article_id: 23,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0303-1024x303.png",
    local_path: "downloaded_images/article_23_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:07.272013",
  },
  {
    id: 77,
    article_id: 23,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/11-1024x476.png",
    local_path: "downloaded_images/article_23_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:07.614757",
  },
  {
    id: 78,
    article_id: 23,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_05291-1024x433.png",
    local_path: "downloaded_images/article_23_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:07.790428",
  },
  {
    id: 79,
    article_id: 23,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/borde.png",
    local_path: "downloaded_images/article_23_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:07.965201",
  },
  {
    id: 80,
    article_id: 24,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-109.png",
    local_path: "downloaded_images/article_24_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:16.152673",
  },
  {
    id: 81,
    article_id: 25,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/user-defined-filters-1.png",
    local_path: "downloaded_images/article_25_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:23.869796",
  },
  {
    id: 82,
    article_id: 25,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/user-defined-filters-2.png",
    local_path: "downloaded_images/article_25_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:24.230783",
  },
  {
    id: 83,
    article_id: 25,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/user-defined-filters-3.png",
    local_path: "downloaded_images/article_25_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:24.772658",
  },
  {
    id: 84,
    article_id: 26,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1cWVhqL3WOZ4HKY49AQxTlpyUkli-eNVog.png",
    local_path: "downloaded_images/article_26_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:32.360147",
  },
  {
    id: 85,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/chain-screen-types.png",
    local_path: "downloaded_images/article_27_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:41.230944",
  },
  {
    id: 86,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LS1lt50t-uGgr4MaAnF2QYnZa315Ur3m6Q.png",
    local_path: "downloaded_images/article_27_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:41.587646",
  },
  {
    id: 87,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LB_w2_ZBt20Cs5GGcChUV_igsWNcqOsxOw.png",
    local_path: "downloaded_images/article_27_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:41.769902",
  },
  {
    id: 88,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hhM4gAeHm5lhjFgFj0f6UQKEFjnoBaqYgw.png",
    local_path: "downloaded_images/article_27_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:41.965547",
  },
  {
    id: 89,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bsaYQ5nzZhXgk8J1KovN5ajoSwrXM0TEgQ.png",
    local_path: "downloaded_images/article_27_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:42.172139",
  },
  {
    id: 90,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/uzNwCWF4lbUQXI0oT83oSkE_ncqAdzR-YQ.png",
    local_path: "downloaded_images/article_27_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:42.359023",
  },
  {
    id: 91,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/uUDg5p0RraREajlU4a72dIUvcZFAQYvAYA.png",
    local_path: "downloaded_images/article_27_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:42.541442",
  },
  {
    id: 92,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/DFsiK0z9Y_Gl0_nsWAK061T77GevW0wV6g.png",
    local_path: "downloaded_images/article_27_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:42.740809",
  },
  {
    id: 93,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/x4QxhkVbITvBVJa2LuF6VxPFWyHibE13Sw.png",
    local_path: "downloaded_images/article_27_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:42.928207",
  },
  {
    id: 94,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sJ9F5cnIbWYIYf5pZM65A3_1E2zFtb2zHA.png",
    local_path: "downloaded_images/article_27_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:43.121981",
  },
  {
    id: 95,
    article_id: 27,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Nkxugq3toUwC3fR67CKMgwonhAqgeNonvg.png",
    local_path: "downloaded_images/article_27_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:43.322643",
  },
  {
    id: 96,
    article_id: 29,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/create-new-details-scrren-1024x572.png",
    local_path: "downloaded_images/article_29_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:56.982877",
  },
  {
    id: 97,
    article_id: 29,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-90-1024x686.png",
    local_path: "downloaded_images/article_29_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:57.158994",
  },
  {
    id: 98,
    article_id: 29,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-91.png",
    local_path: "downloaded_images/article_29_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:57.335721",
  },
  {
    id: 99,
    article_id: 29,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/details_screen_type_pic4.png",
    local_path: "downloaded_images/article_29_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:04:57.511303",
  },
  {
    id: 100,
    article_id: 30,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ubica-1024x478.png",
    local_path: "downloaded_images/article_30_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:05.981818",
  },
  {
    id: 101,
    article_id: 30,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/map-1024x299.png",
    local_path: "downloaded_images/article_30_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:06.158711",
  },
  {
    id: 102,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-84-840x1024.png",
    local_path: "downloaded_images/article_31_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:16.32047",
  },
  {
    id: 103,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000044-1.png",
    local_path: "downloaded_images/article_31_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:16.496363",
  },
  {
    id: 104,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0527.png",
    local_path: "downloaded_images/article_31_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:16.676569",
  },
  {
    id: 105,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-86-1024x588.png",
    local_path: "downloaded_images/article_31_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:16.854744",
  },
  {
    id: 106,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-89-1024x200.png",
    local_path: "downloaded_images/article_31_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:17.032127",
  },
  {
    id: 107,
    article_id: 31,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-88-1024x846.png",
    local_path: "downloaded_images/article_31_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:17.209148",
  },
  {
    id: 108,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/cs-R_y45iKHzWxaEydzsKJFiEqiOSr7eUw.png",
    local_path: "downloaded_images/article_32_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:26.130143",
  },
  {
    id: 109,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/eeeeeeeeee-1024x299.png",
    local_path: "downloaded_images/article_32_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:26.384345",
  },
  {
    id: 110,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ffff-1024x430.png",
    local_path: "downloaded_images/article_32_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:26.559653",
  },
  {
    id: 111,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-79.png",
    local_path: "downloaded_images/article_32_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:26.73651",
  },
  {
    id: 112,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-82.png",
    local_path: "downloaded_images/article_32_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:26.917284",
  },
  {
    id: 113,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ddd-2-1024x329.png",
    local_path: "downloaded_images/article_32_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:27.091603",
  },
  {
    id: 114,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-80.png",
    local_path: "downloaded_images/article_32_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:27.266968",
  },
  {
    id: 115,
    article_id: 32,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-81.png",
    local_path: "downloaded_images/article_32_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:27.440326",
  },
  {
    id: 116,
    article_id: 33,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/screen-1024x721.png",
    local_path: "downloaded_images/article_33_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:35.133891",
  },
  {
    id: 117,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-18-114337.png",
    local_path: "downloaded_images/article_34_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:48.156622",
  },
  {
    id: 118,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JQI1DKT16hVBFQghQ8ugjdZAOiC4D3TDew.png",
    local_path: "downloaded_images/article_34_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:48.84696",
  },
  {
    id: 119,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/71cuR5fs1efljMNaUyCdlfyCfO4rfw6tRw.png",
    local_path: "downloaded_images/article_34_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:49.202073",
  },
  {
    id: 120,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5EIrwAaUXc6t4xsguv2ejr111syJ2ADxoQ.png",
    local_path: "downloaded_images/article_34_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:49.412137",
  },
  {
    id: 121,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kxkhy6uAN4aGVwDZzLmYrBW_b9nvtWyh-Q.png",
    local_path: "downloaded_images/article_34_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:49.621921",
  },
  {
    id: 122,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Mi8BlO5O-QzlXupm4Qr90BbBOm9RTc04qA.png",
    local_path: "downloaded_images/article_34_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:49.830091",
  },
  {
    id: 123,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/8ajoE6hbz5bsManb9PoZ46HVkBqPe-bp0w.png",
    local_path: "downloaded_images/article_34_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:50.881842",
  },
  {
    id: 124,
    article_id: 34,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/current-task-1024x424.png",
    local_path: "downloaded_images/article_34_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:51.057042",
  },
  {
    id: 125,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-18-114337.png",
    local_path: "downloaded_images/article_35_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:05:59.913351",
  },
  {
    id: 126,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/jr9Z8eopyxs_ZuS32R4sToY1jUeBzvJAdw.png",
    local_path: "downloaded_images/article_35_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:00.605533",
  },
  {
    id: 127,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pWM1-wOUpvcamCPsrBugLSCrU_Wa3W93RQ.png",
    local_path: "downloaded_images/article_35_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:01.122801",
  },
  {
    id: 128,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IkGJNMsgCGATbEHzsAq4N1aUfaeLpq-nBA.png",
    local_path: "downloaded_images/article_35_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:01.33104",
  },
  {
    id: 129,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/lnYxxaPA_vq2-wPJb6qq4s_2sIWqncIyBw.png",
    local_path: "downloaded_images/article_35_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:01.538568",
  },
  {
    id: 130,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rjD9Elfu1oWX3cFWj1thJaTylIvLxtkJow.png",
    local_path: "downloaded_images/article_35_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:01.747514",
  },
  {
    id: 131,
    article_id: 35,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/current-task-1024x424.png",
    local_path: "downloaded_images/article_35_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:01.921955",
  },
  {
    id: 132,
    article_id: 36,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qr-icon-1.png",
    local_path: "downloaded_images/article_36_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:09.359077",
  },
  {
    id: 133,
    article_id: 36,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qr-dynamic-1024x434.png",
    local_path: "downloaded_images/article_36_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:10.501398",
  },
  {
    id: 134,
    article_id: 36,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qr-static-1-1024x321.png",
    local_path: "downloaded_images/article_36_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:10.679616",
  },
  {
    id: 135,
    article_id: 37,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-192.png",
    local_path: "downloaded_images/article_37_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:18.045337",
  },
  {
    id: 136,
    article_id: 37,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0301-1024x455.png",
    local_path: "downloaded_images/article_37_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:18.565062",
  },
  {
    id: 137,
    article_id: 38,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-197.png",
    local_path: "downloaded_images/article_38_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:25.999225",
  },
  {
    id: 138,
    article_id: 38,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/PvuYndoLBtVEmMydtl_DTiGP6OCHPQCHdQ.png",
    local_path: "downloaded_images/article_38_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:26.338994",
  },
  {
    id: 139,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-185.png",
    local_path: "downloaded_images/article_39_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:46.345565",
  },
  {
    id: 140,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ocr-1024x388.png",
    local_path: "downloaded_images/article_39_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:46.699511",
  },
  {
    id: 141,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-186.png",
    local_path: "downloaded_images/article_39_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:46.876321",
  },
  {
    id: 142,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-187.png",
    local_path: "downloaded_images/article_39_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:47.052312",
  },
  {
    id: 143,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-189.png",
    local_path: "downloaded_images/article_39_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:47.232627",
  },
  {
    id: 144,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pPeSDPnSWcJF_dxzOlrBVMLQgRzbyNkWcA.gif",
    local_path: "downloaded_images/article_39_img_5.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:48.773238",
  },
  {
    id: 145,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/HdqhSfIbFOkjnaeJdXzNoY9lu11NjxqsEw.png",
    local_path: "downloaded_images/article_39_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:49.398445",
  },
  {
    id: 146,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/BFbMroht-lZCkI8t2Q2gPa7MMtTH7wfiJQ.png",
    local_path: "downloaded_images/article_39_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:50.287979",
  },
  {
    id: 147,
    article_id: 39,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_00003-1024x330.png",
    local_path: "downloaded_images/article_39_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:50.488852",
  },
  {
    id: 148,
    article_id: 40,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-184.png",
    local_path: "downloaded_images/article_40_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:06:57.701877",
  },
  {
    id: 149,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-174.png",
    local_path: "downloaded_images/article_41_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:06.153309",
  },
  {
    id: 150,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-175.png",
    local_path: "downloaded_images/article_41_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:06.506477",
  },
  {
    id: 151,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest.png",
    local_path: "downloaded_images/article_41_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:06.858601",
  },
  {
    id: 152,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-176.png",
    local_path: "downloaded_images/article_41_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:07.037282",
  },
  {
    id: 153,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-182.png",
    local_path: "downloaded_images/article_41_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:07.217191",
  },
  {
    id: 154,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-183.png",
    local_path: "downloaded_images/article_41_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:07.396012",
  },
  {
    id: 155,
    article_id: 41,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-181.png",
    local_path: "downloaded_images/article_41_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:07.576561",
  },
  {
    id: 156,
    article_id: 42,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-172.png",
    local_path: "downloaded_images/article_42_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:17.685444",
  },
  {
    id: 157,
    article_id: 42,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/gallery-1024x207.png",
    local_path: "downloaded_images/article_42_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:18.200375",
  },
  {
    id: 158,
    article_id: 42,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/f0nCbFy5YDouBbtrEd_8IWPVMK4zXJpuMg.png",
    local_path: "downloaded_images/article_42_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:18.713152",
  },
  {
    id: 159,
    article_id: 42,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-173.png",
    local_path: "downloaded_images/article_42_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:18.887048",
  },
  {
    id: 160,
    article_id: 42,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/gal2-1024x183.png",
    local_path: "downloaded_images/article_42_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:19.062674",
  },
  {
    id: 161,
    article_id: 43,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-168.png",
    local_path: "downloaded_images/article_43_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:26.571729",
  },
  {
    id: 162,
    article_id: 43,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-169.png",
    local_path: "downloaded_images/article_43_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:26.920696",
  },
  {
    id: 163,
    article_id: 43,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oYqVGAAI-CCZ3MOOii10rr63lM5M236TFQ.png",
    local_path: "downloaded_images/article_43_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:27.10044",
  },
  {
    id: 164,
    article_id: 43,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xAKOelHvQJBfDESFdVMpTTCRilWf9xawaQ.png",
    local_path: "downloaded_images/article_43_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:27.277983",
  },
  {
    id: 165,
    article_id: 43,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-170.png",
    local_path: "downloaded_images/article_43_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:27.466213",
  },
  {
    id: 166,
    article_id: 44,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-167.png",
    local_path: "downloaded_images/article_44_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:35.143019",
  },
  {
    id: 167,
    article_id: 44,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03101-1024x355.png",
    local_path: "downloaded_images/article_44_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:35.489145",
  },
  {
    id: 168,
    article_id: 44,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000052-1024x458.png",
    local_path: "downloaded_images/article_44_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:35.832474",
  },
  {
    id: 169,
    article_id: 45,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-164.png",
    local_path: "downloaded_images/article_45_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:43.315023",
  },
  {
    id: 170,
    article_id: 45,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-165.png",
    local_path: "downloaded_images/article_45_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:43.666844",
  },
  {
    id: 171,
    article_id: 45,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2swZa70GNG5L9Sp0drzJwCuCp5rqalxK5g.png",
    local_path: "downloaded_images/article_45_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:43.840907",
  },
  {
    id: 172,
    article_id: 45,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-166.png",
    local_path: "downloaded_images/article_45_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:44.185705",
  },
  {
    id: 173,
    article_id: 46,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-162.png",
    local_path: "downloaded_images/article_46_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:07:59.936547",
  },
  {
    id: 174,
    article_id: 46,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/signature-1024x177.png",
    local_path: "downloaded_images/article_46_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:00.402481",
  },
  {
    id: 175,
    article_id: 46,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/jfnRNZ49QMLLAu5Fu1Im7YeuO0Gm8wEWMA.png",
    local_path: "downloaded_images/article_46_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:01.620821",
  },
  {
    id: 176,
    article_id: 46,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03072-1024x183.png",
    local_path: "downloaded_images/article_46_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:01.799022",
  },
  {
    id: 177,
    article_id: 46,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-163.png",
    local_path: "downloaded_images/article_46_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:01.990152",
  },
  {
    id: 178,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-157.png",
    local_path: "downloaded_images/article_47_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:10.919222",
  },
  {
    id: 179,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mediaField-1024x300.png",
    local_path: "downloaded_images/article_47_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:11.278331",
  },
  {
    id: 180,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-158.png",
    local_path: "downloaded_images/article_47_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:11.453457",
  },
  {
    id: 181,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-159.png",
    local_path: "downloaded_images/article_47_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:11.627744",
  },
  {
    id: 182,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/elus0mZDPHwVGKwWNMu-oO34aWDG_P9FYw.png",
    local_path: "downloaded_images/article_47_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:11.973955",
  },
  {
    id: 183,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/media-1024x299.png",
    local_path: "downloaded_images/article_47_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:12.156432",
  },
  {
    id: 184,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-160.png",
    local_path: "downloaded_images/article_47_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:12.337536",
  },
  {
    id: 185,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_0426-1024x627.png",
    local_path: "downloaded_images/article_47_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:12.512032",
  },
  {
    id: 186,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/carblue-1024x236.png",
    local_path: "downloaded_images/article_47_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:12.689749",
  },
  {
    id: 187,
    article_id: 47,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Jlc6P7flUX98ejniWg1JiTq50G_fHML0rw.png",
    local_path: "downloaded_images/article_47_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:13.392005",
  },
  {
    id: 188,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-148.png",
    local_path: "downloaded_images/article_48_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:20.810468",
  },
  {
    id: 189,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ZlPBrU_UW8w7YpquGTz08fGKNj_24FoYXA.png",
    local_path: "downloaded_images/article_48_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:21.154319",
  },
  {
    id: 190,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/N-7FdE8-NYjacpIPjTLjcltfo4bP1I96Fg.png",
    local_path: "downloaded_images/article_48_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:21.838782",
  },
  {
    id: 191,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-12-130006.png",
    local_path: "downloaded_images/article_48_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.016205",
  },
  {
    id: 192,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-12-130120.png",
    local_path: "downloaded_images/article_48_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.191776",
  },
  {
    id: 193,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bar.png",
    local_path: "downloaded_images/article_48_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.366187",
  },
  {
    id: 194,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-155.png",
    local_path: "downloaded_images/article_48_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.540142",
  },
  {
    id: 195,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-156.png",
    local_path: "downloaded_images/article_48_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.717555",
  },
  {
    id: 196,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-147.png",
    local_path: "downloaded_images/article_48_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:22.894657",
  },
  {
    id: 197,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-146.png",
    local_path: "downloaded_images/article_48_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.070344",
  },
  {
    id: 198,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-140.png",
    local_path: "downloaded_images/article_48_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.245663",
  },
  {
    id: 199,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-141.png",
    local_path: "downloaded_images/article_48_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.425067",
  },
  {
    id: 200,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-142.png",
    local_path: "downloaded_images/article_48_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.607628",
  },
  {
    id: 201,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-143.png",
    local_path: "downloaded_images/article_48_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.782763",
  },
  {
    id: 202,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-144.png",
    local_path: "downloaded_images/article_48_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:23.958697",
  },
  {
    id: 203,
    article_id: 48,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-145.png",
    local_path: "downloaded_images/article_48_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:24.133939",
  },
  {
    id: 204,
    article_id: 49,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-154.png",
    local_path: "downloaded_images/article_49_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:31.332991",
  },
  {
    id: 205,
    article_id: 49,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-131.png",
    local_path: "downloaded_images/article_49_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:31.67557",
  },
  {
    id: 206,
    article_id: 50,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-190.png",
    local_path: "downloaded_images/article_50_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:39.106212",
  },
  {
    id: 207,
    article_id: 50,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-191.png",
    local_path: "downloaded_images/article_50_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:39.463879",
  },
  {
    id: 208,
    article_id: 51,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-149.png",
    local_path: "downloaded_images/article_51_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:48.720425",
  },
  {
    id: 209,
    article_id: 51,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-127.png",
    local_path: "downloaded_images/article_51_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:49.067281",
  },
  {
    id: 210,
    article_id: 51,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-129.png",
    local_path: "downloaded_images/article_51_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:49.416737",
  },
  {
    id: 211,
    article_id: 51,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-152.png",
    local_path: "downloaded_images/article_51_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:49.599521",
  },
  {
    id: 212,
    article_id: 51,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-124.png",
    local_path: "downloaded_images/article_51_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:49.961617",
  },
  {
    id: 213,
    article_id: 52,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-153.png",
    local_path: "downloaded_images/article_52_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:57.853023",
  },
  {
    id: 214,
    article_id: 52,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03032.png",
    local_path: "downloaded_images/article_52_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:58.200146",
  },
  {
    id: 215,
    article_id: 52,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-122.png",
    local_path: "downloaded_images/article_52_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:58.377462",
  },
  {
    id: 216,
    article_id: 52,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-123.png",
    local_path: "downloaded_images/article_52_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:08:58.555618",
  },
  {
    id: 217,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/UddW120XhytXalE-HmG3oTmbBlNXI4GxMQ.gif",
    local_path: "downloaded_images/article_53_img_0.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:18.13244",
  },
  {
    id: 218,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xKD4EwKXaGKWQrlnut0_f8uCxvJ9YM5P0A.png",
    local_path: "downloaded_images/article_53_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:18.311278",
  },
  {
    id: 219,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-171.png",
    local_path: "downloaded_images/article_53_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:18.49354",
  },
  {
    id: 220,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rjTvJleVgeXGU0sI38rb4TRRIFdn8TDtpg.png",
    local_path: "downloaded_images/article_53_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:18.673194",
  },
  {
    id: 221,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/wlnhwSAeK8cMkyOkSLOmq_nXFsGJCacrZw.png",
    local_path: "downloaded_images/article_53_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:18.852078",
  },
  {
    id: 222,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nGGSQ3Lc3UzqBllLDz70gf13RHot9ojxBQ.png",
    local_path: "downloaded_images/article_53_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:19.030031",
  },
  {
    id: 223,
    article_id: 53,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LMOMim7SOkAqFq1omlF9vPQbw8iTvRGtEw.png",
    local_path: "downloaded_images/article_53_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:19.208095",
  },
  {
    id: 224,
    article_id: 56,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/datediff1-1024x359.png",
    local_path: "downloaded_images/article_56_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:48.869655",
  },
  {
    id: 225,
    article_id: 56,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/date-diff-2-1024x183.png",
    local_path: "downloaded_images/article_56_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:49.05031",
  },
  {
    id: 226,
    article_id: 56,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/date-diff-3-1024x443.png",
    local_path: "downloaded_images/article_56_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:49.396289",
  },
  {
    id: 227,
    article_id: 56,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/date-diff-4-1024x254.png",
    local_path: "downloaded_images/article_56_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:49.579815",
  },
  {
    id: 228,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-4.png",
    local_path: "downloaded_images/article_57_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:58.860243",
  },
  {
    id: 229,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-5.png",
    local_path: "downloaded_images/article_57_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:59.210352",
  },
  {
    id: 230,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-6-1024x608.png",
    local_path: "downloaded_images/article_57_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:59.388167",
  },
  {
    id: 231,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-7-1024x136.png",
    local_path: "downloaded_images/article_57_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:59.56704",
  },
  {
    id: 232,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-8-1024x393.png",
    local_path: "downloaded_images/article_57_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:59.744951",
  },
  {
    id: 233,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-9.png",
    local_path: "downloaded_images/article_57_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:09:59.925469",
  },
  {
    id: 234,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xero-item-1.png",
    local_path: "downloaded_images/article_57_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:00.110529",
  },
  {
    id: 235,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xero-item-2.png",
    local_path: "downloaded_images/article_57_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:00.468739",
  },
  {
    id: 236,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-12-1024x441.png",
    local_path: "downloaded_images/article_57_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:00.646173",
  },
  {
    id: 237,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-13-1024x200.png",
    local_path: "downloaded_images/article_57_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:01.405472",
  },
  {
    id: 238,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-14-429x1024.png",
    local_path: "downloaded_images/article_57_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:01.591202",
  },
  {
    id: 239,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-15-1024x507.png",
    local_path: "downloaded_images/article_57_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:01.773676",
  },
  {
    id: 240,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-16-1024x510.png",
    local_path: "downloaded_images/article_57_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:01.9732",
  },
  {
    id: 241,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-17-1024x336.png",
    local_path: "downloaded_images/article_57_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:02.201793",
  },
  {
    id: 242,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-18-1024x324.png",
    local_path: "downloaded_images/article_57_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:02.389586",
  },
  {
    id: 243,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-19-1024x295.png",
    local_path: "downloaded_images/article_57_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:02.571344",
  },
  {
    id: 244,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-20.png",
    local_path: "downloaded_images/article_57_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:02.767014",
  },
  {
    id: 245,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-21-1024x236.png",
    local_path: "downloaded_images/article_57_img_17.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:03.34046",
  },
  {
    id: 246,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-22-1024x811.png",
    local_path: "downloaded_images/article_57_img_18.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:03.602992",
  },
  {
    id: 247,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-23-1024x816.png",
    local_path: "downloaded_images/article_57_img_19.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:03.910393",
  },
  {
    id: 248,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-24.png",
    local_path: "downloaded_images/article_57_img_20.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:04.114162",
  },
  {
    id: 249,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-25-1024x815.png",
    local_path: "downloaded_images/article_57_img_21.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:04.31017",
  },
  {
    id: 250,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xero-item-3-668x1024.png",
    local_path: "downloaded_images/article_57_img_22.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:04.680343",
  },
  {
    id: 251,
    article_id: 57,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-27-1024x528.png",
    local_path: "downloaded_images/article_57_img_23.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:04.868798",
  },
  {
    id: 252,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep1-1-1024x120.png",
    local_path: "downloaded_images/article_58_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:12.944495",
  },
  {
    id: 253,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep2-1024x182.png",
    local_path: "downloaded_images/article_58_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:13.124472",
  },
  {
    id: 254,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep3-1024x563.png",
    local_path: "downloaded_images/article_58_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:13.301939",
  },
  {
    id: 255,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/stepAccept-1024x52.png",
    local_path: "downloaded_images/article_58_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:13.483614",
  },
  {
    id: 256,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-54-1024x53.png",
    local_path: "downloaded_images/article_58_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:13.664486",
  },
  {
    id: 257,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep4-2-1024x133.png",
    local_path: "downloaded_images/article_58_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:13.840538",
  },
  {
    id: 258,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep5-1024x131.png",
    local_path: "downloaded_images/article_58_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:14.016771",
  },
  {
    id: 259,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep6-1024x134.png",
    local_path: "downloaded_images/article_58_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:14.208204",
  },
  {
    id: 260,
    article_id: 58,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/workflowStep7-1024x104.png",
    local_path: "downloaded_images/article_58_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:14.388555",
  },
  {
    id: 261,
    article_id: 60,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/textAsFormula.png",
    local_path: "downloaded_images/article_60_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:30.56777",
  },
  {
    id: 262,
    article_id: 61,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/regex1-1-1024x243.png",
    local_path: "downloaded_images/article_61_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:38.340736",
  },
  {
    id: 263,
    article_id: 61,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/regex2-1024x676.png",
    local_path: "downloaded_images/article_61_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:38.520038",
  },
  {
    id: 264,
    article_id: 62,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/leDU-5GjIAsrQV9-H4-cPPiwgya-zOxidg.png",
    local_path: "downloaded_images/article_62_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:47.529895",
  },
  {
    id: 265,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sQoNEpDTvXr-RI1scfs-nfOH3b46KH2m0Q.jpg",
    local_path: "downloaded_images/article_63_img_0.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:56.51453",
  },
  {
    id: 266,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/confirmReady.png",
    local_path: "downloaded_images/article_63_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:56.857862",
  },
  {
    id: 267,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Y-aM4uqzuKnTtHt1Xy6u2cPM9vjxgoH3sA.png",
    local_path: "downloaded_images/article_63_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:57.204471",
  },
  {
    id: 268,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/aproveReject.png",
    local_path: "downloaded_images/article_63_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:57.551593",
  },
  {
    id: 269,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xi57O-2KwEuiCOZS0Q_1pdPqKCX_1Gra-A.png",
    local_path: "downloaded_images/article_63_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:57.899384",
  },
  {
    id: 270,
    article_id: 63,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pageTabs.png",
    local_path: "downloaded_images/article_63_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:10:58.247669",
  },
  {
    id: 271,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1y-AsdoHaA_HjWfVnAjUNwIQOnlrplfzag.png",
    local_path: "downloaded_images/article_64_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.006527",
  },
  {
    id: 272,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Bo8H8GB4ti9hrBMqCjzsrOAPNPIo_0NbuA.png",
    local_path: "downloaded_images/article_64_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.189573",
  },
  {
    id: 273,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/x3lgagtMO0mxzhNkZetvc1bq6rDUnHjmug.png",
    local_path: "downloaded_images/article_64_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.369783",
  },
  {
    id: 274,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LjZe5AOx__MXfr0MGeZfnxoVcEi6UC3tkg.png",
    local_path: "downloaded_images/article_64_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.552397",
  },
  {
    id: 275,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qIjDXznCCLQvrpLEp51FQ7qkjS_TC03k_A.png",
    local_path: "downloaded_images/article_64_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.730919",
  },
  {
    id: 276,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qwj5OOsVceqgZMV4rfM9G46ipc24vu4-dg.png",
    local_path: "downloaded_images/article_64_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:10.909989",
  },
  {
    id: 277,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/P0SbfH1cFZ0wYC8a-i2ke_Y-Sv9fvxzkkw.png",
    local_path: "downloaded_images/article_64_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.087804",
  },
  {
    id: 278,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bzM7hfkq0b_0PmagXhwETml7bdEyFXq_w.png",
    local_path: "downloaded_images/article_64_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.26776",
  },
  {
    id: 279,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/F43NlvL0nIrZ1NI4cbizdQ1APL3Y9KyicQ.png",
    local_path: "downloaded_images/article_64_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.448121",
  },
  {
    id: 280,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LBrU-AUzxWjdYmcNbSlPRX71GsrYPU884w.png",
    local_path: "downloaded_images/article_64_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.625659",
  },
  {
    id: 281,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/My1JBStKi7twN83F4E57c5Mkhq-_ZBi5DQ.png",
    local_path: "downloaded_images/article_64_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.803457",
  },
  {
    id: 282,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FDciUHcR9GPsaMdRt4BUSuomudp8q4HoMg.png",
    local_path: "downloaded_images/article_64_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:11.991695",
  },
  {
    id: 283,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/R8ssZRHGqKMpmlwPzlB_Od7xybZu9i7K2w.png",
    local_path: "downloaded_images/article_64_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:12.17134",
  },
  {
    id: 284,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/A8b1ezSrSuYmNKOjzpDAKX_v3nWWz0T4Aw.png",
    local_path: "downloaded_images/article_64_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:12.351273",
  },
  {
    id: 285,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/7O49K0oSgM3FD0HaqM18qI00fIRRJ7ebig.png",
    local_path: "downloaded_images/article_64_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:12.533862",
  },
  {
    id: 286,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/YnL6i48TgDIz-XkgFyn8O25c84vSeQY51w.png",
    local_path: "downloaded_images/article_64_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:12.714023",
  },
  {
    id: 287,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/SQUvfZxeIotvRsL9FLNHO-5TrS2uOccF1w.png",
    local_path: "downloaded_images/article_64_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:12.895033",
  },
  {
    id: 288,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/g8OTLVE_ZrnuoSpkGzKNxaR2uz3PgztFpg.png",
    local_path: "downloaded_images/article_64_img_17.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:13.078414",
  },
  {
    id: 289,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/llaTfkD-dxOCzfw87uLfJltLPkExpi5rXQ.png",
    local_path: "downloaded_images/article_64_img_18.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:13.265295",
  },
  {
    id: 290,
    article_id: 64,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/DAfdHzF40QNiVwe9dLHzccu_lNlXc_xvEg.png",
    local_path: "downloaded_images/article_64_img_19.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:13.451253",
  },
  {
    id: 291,
    article_id: 65,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NiNdVI-oLx68YK60ig8XvNzITruPj-UYVA.png",
    local_path: "downloaded_images/article_65_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:21.927411",
  },
  {
    id: 292,
    article_id: 65,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FyQP-AxqwR1c3ZnViv-_wO6JWoMAgtOpPA.png",
    local_path: "downloaded_images/article_65_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:22.294209",
  },
  {
    id: 293,
    article_id: 65,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/3ve72H622A7zkylZaHV3_Z4lP2iL3vBurg.png",
    local_path: "downloaded_images/article_65_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:22.474118",
  },
  {
    id: 294,
    article_id: 65,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Y5lMCDdfaA1CiAnS-hJBzgHT11LRzGl8Gg.png",
    local_path: "downloaded_images/article_65_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:22.655157",
  },
  {
    id: 295,
    article_id: 65,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/0dSJ-TUGvjaiU8HgfRtPJu_NcBexsdve1Q.png",
    local_path: "downloaded_images/article_65_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:22.839464",
  },
  {
    id: 296,
    article_id: 66,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/formSettings-1024x577.png",
    local_path: "downloaded_images/article_66_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:30.560586",
  },
  {
    id: 297,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pageIcon.png",
    local_path: "downloaded_images/article_67_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:43.112357",
  },
  {
    id: 298,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tableIcon.png",
    local_path: "downloaded_images/article_67_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:43.289179",
  },
  {
    id: 299,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/galleryIcon.png",
    local_path: "downloaded_images/article_67_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:43.462686",
  },
  {
    id: 300,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multiplePage-1024x242.png",
    local_path: "downloaded_images/article_67_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:43.640022",
  },
  {
    id: 301,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/repeatBasicProper.png",
    local_path: "downloaded_images/article_67_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:43.984472",
  },
  {
    id: 302,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/addPageExample-767x1024.png",
    local_path: "downloaded_images/article_67_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:44.161983",
  },
  {
    id: 303,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multiplePhoto-1024x757.png",
    local_path: "downloaded_images/article_67_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:44.340446",
  },
  {
    id: 304,
    article_id: 67,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/newRowButton-1.png",
    local_path: "downloaded_images/article_67_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:44.523589",
  },
  {
    id: 305,
    article_id: 68,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-51-1024x586.png",
    local_path: "downloaded_images/article_68_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:11:52.107937",
  },
  {
    id: 306,
    article_id: 69,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/barcodeAddNew-1024x329.png",
    local_path: "downloaded_images/article_69_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:01.234218",
  },
  {
    id: 307,
    article_id: 69,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/barcodeInline-1024x166.png",
    local_path: "downloaded_images/article_69_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:01.582271",
  },
  {
    id: 308,
    article_id: 69,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/przfthnXGSK4r78Cz735hgXEI7eAtYFGTA.png",
    local_path: "downloaded_images/article_69_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:02.107054",
  },
  {
    id: 309,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/CustomValidation.png",
    local_path: "downloaded_images/article_73_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:28.922217",
  },
  {
    id: 310,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/customValid2.png",
    local_path: "downloaded_images/article_73_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:29.101779",
  },
  {
    id: 311,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/customValid3.png",
    local_path: "downloaded_images/article_73_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:29.279879",
  },
  {
    id: 312,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/customValid4.png",
    local_path: "downloaded_images/article_73_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:29.456766",
  },
  {
    id: 313,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/customValid5.png",
    local_path: "downloaded_images/article_73_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:29.637854",
  },
  {
    id: 314,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/customValid6-1024x603.png",
    local_path: "downloaded_images/article_73_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:29.815188",
  },
  {
    id: 315,
    article_id: 73,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/customValid7.png",
    local_path: "downloaded_images/article_73_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:30.00839",
  },
  {
    id: 316,
    article_id: 75,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/allowingUsers1-1024x689.png",
    local_path: "downloaded_images/article_75_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:47.673992",
  },
  {
    id: 317,
    article_id: 75,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/allowingUsers2-e1750351507135-1024x552.png",
    local_path: "downloaded_images/article_75_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:12:47.854214",
  },
  {
    id: 318,
    article_id: 77,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/cascading1.png",
    local_path: "downloaded_images/article_77_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:01.870181",
  },
  {
    id: 319,
    article_id: 79,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dynamicAnswear1.png",
    local_path: "downloaded_images/article_79_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:16.197905",
  },
  {
    id: 320,
    article_id: 79,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dynamicAnswear2.png",
    local_path: "downloaded_images/article_79_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:16.376992",
  },
  {
    id: 321,
    article_id: 79,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dynamicAnswear3.png",
    local_path: "downloaded_images/article_79_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:16.733369",
  },
  {
    id: 322,
    article_id: 82,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/anonymizing-excluding-data-1-1024x236.png",
    local_path: "downloaded_images/article_82_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:38.208235",
  },
  {
    id: 323,
    article_id: 82,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/anonymizing-excluding-data-2-1024x494.png",
    local_path: "downloaded_images/article_82_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:38.382938",
  },
  {
    id: 324,
    article_id: 82,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/anonymizing-excluding-data-5-1024x162.png",
    local_path: "downloaded_images/article_82_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:38.558684",
  },
  {
    id: 325,
    article_id: 82,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/anonymizing-excluding-data-3-1024x154.png",
    local_path: "downloaded_images/article_82_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:38.735346",
  },
  {
    id: 326,
    article_id: 82,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/anonymizing-excluding-data-4-1024x741.png",
    local_path: "downloaded_images/article_82_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:39.080104",
  },
  {
    id: 327,
    article_id: 84,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-form-entries-1.png",
    local_path: "downloaded_images/article_84_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:53.438453",
  },
  {
    id: 328,
    article_id: 84,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-form-entries-2.png",
    local_path: "downloaded_images/article_84_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:13:53.621182",
  },
  {
    id: 329,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/manually-downloading-data-1-1024x378.png",
    local_path: "downloaded_images/article_86_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:08.468799",
  },
  {
    id: 330,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/EpMy3cgoSn7GX0eGUl7AU3qnnjLpCkw9ag.png",
    local_path: "downloaded_images/article_86_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:08.647127",
  },
  {
    id: 331,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/manually-downloading-data-2-1024x356.png",
    local_path: "downloaded_images/article_86_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:08.821958",
  },
  {
    id: 332,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/manually-downloading-data-3-1024x338.png",
    local_path: "downloaded_images/article_86_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:08.998601",
  },
  {
    id: 333,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/manually-downloading-data-4-1024x516.png",
    local_path: "downloaded_images/article_86_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:09.176391",
  },
  {
    id: 334,
    article_id: 86,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FkAmm56AvJsvdqE0AIl9-6KN6wcO9vn0EA.png",
    local_path: "downloaded_images/article_86_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:09.520853",
  },
  {
    id: 335,
    article_id: 87,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-entries-on-a-map-1024x295.png",
    local_path: "downloaded_images/article_87_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:17.274169",
  },
  {
    id: 336,
    article_id: 88,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-file-1024x376.png",
    local_path: "downloaded_images/article_88_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:25.018273",
  },
  {
    id: 337,
    article_id: 88,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-table-2-1024x377.png",
    local_path: "downloaded_images/article_88_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:25.196247",
  },
  {
    id: 338,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-1-1024x439.png",
    local_path: "downloaded_images/article_89_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:34.549917",
  },
  {
    id: 339,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-2.png",
    local_path: "downloaded_images/article_89_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:34.726999",
  },
  {
    id: 340,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-3.png",
    local_path: "downloaded_images/article_89_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:34.909117",
  },
  {
    id: 341,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-4-1024x358.png",
    local_path: "downloaded_images/article_89_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:35.087346",
  },
  {
    id: 342,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-5-1024x358.png",
    local_path: "downloaded_images/article_89_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:35.265841",
  },
  {
    id: 343,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-6.png",
    local_path: "downloaded_images/article_89_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:35.632226",
  },
  {
    id: 344,
    article_id: 89,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/form-entries-7.png",
    local_path: "downloaded_images/article_89_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:35.808895",
  },
  {
    id: 345,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-1.png",
    local_path: "downloaded_images/article_90_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:44.676231",
  },
  {
    id: 346,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-2.png",
    local_path: "downloaded_images/article_90_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:45.026554",
  },
  {
    id: 347,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-3-1024x272.png",
    local_path: "downloaded_images/article_90_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:45.207226",
  },
  {
    id: 348,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-4-1024x541.png",
    local_path: "downloaded_images/article_90_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:45.38379",
  },
  {
    id: 349,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-5-1024x484.png",
    local_path: "downloaded_images/article_90_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:45.557778",
  },
  {
    id: 350,
    article_id: 90,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/text-templates-6-1024x495.png",
    local_path: "downloaded_images/article_90_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:45.735184",
  },
  {
    id: 351,
    article_id: 91,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screen_Shot_2015-01-21_at_2.30.09_pm.png",
    local_path: "downloaded_images/article_91_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:58.06949",
  },
  {
    id: 352,
    article_id: 91,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screen_Shot_2015-01-21_at_2.28.50_pm.png",
    local_path: "downloaded_images/article_91_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:14:58.267213",
  },
  {
    id: 353,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JNFrQRl6bllAaBEukGXUFg-YgCgXOFOK1Q.png",
    local_path: "downloaded_images/article_92_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:06.591536",
  },
  {
    id: 354,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/WMjUxNg35YOqVOsvvElZADyVMilJpqHFBg.png",
    local_path: "downloaded_images/article_92_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:06.767715",
  },
  {
    id: 355,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/yhrziYrf47Y9Od3mF8EMNB_W3O6NCmDatw.png",
    local_path: "downloaded_images/article_92_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:06.943494",
  },
  {
    id: 356,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/uOnzOZmaBQZp5HPUunz8TsyuudmABDpMDQ.png",
    local_path: "downloaded_images/article_92_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:07.118725",
  },
  {
    id: 357,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/QzYNyNBGj6aMjBF2gKE3Kb_B1W1ni7_j6A.png",
    local_path: "downloaded_images/article_92_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:07.29767",
  },
  {
    id: 358,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kX45_ECZ_PY9B9SztWPse7HeM-66WxOoWw.png",
    local_path: "downloaded_images/article_92_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:07.474678",
  },
  {
    id: 359,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Mw8iEMIdg0qXNwE_LBFJCKOumMRkqPIR_g.png",
    local_path: "downloaded_images/article_92_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:07.65077",
  },
  {
    id: 360,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/spPPHWQM4G4QIDispFqClZSgwE2M1-wMuQ.png",
    local_path: "downloaded_images/article_92_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:07.827655",
  },
  {
    id: 361,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fKEEI_mmmtyuHap62FvOocVwVkfNNKHPaw.png",
    local_path: "downloaded_images/article_92_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:08.005095",
  },
  {
    id: 362,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/j_9xwzd-tivXb6GkUlABD7_Aip5H8Nrebg.png",
    local_path: "downloaded_images/article_92_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:08.182706",
  },
  {
    id: 363,
    article_id: 92,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/yf-Y1KSFtp4d6fZSa8IUEwFv7chzYY_JrA.png",
    local_path: "downloaded_images/article_92_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:15:08.361489",
  },
  {
    id: 364,
    article_id: 100,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/word-templates-1.png",
    local_path: "downloaded_images/article_100_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:04.599002",
  },
  {
    id: 365,
    article_id: 100,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/word-templates-2-1024x541.png",
    local_path: "downloaded_images/article_100_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:04.781346",
  },
  {
    id: 366,
    article_id: 101,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/built-in-templates-1-1024x390.png",
    local_path: "downloaded_images/article_101_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:25.179392",
  },
  {
    id: 367,
    article_id: 101,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sJtw2WetKM9oAoYFAnbdFkHzsA57L53Cvg.png",
    local_path: "downloaded_images/article_101_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:26.072265",
  },
  {
    id: 368,
    article_id: 101,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/UA3UMl9_SGvsWsyHwQLDadnurxgLS60Qcw.png",
    local_path: "downloaded_images/article_101_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:26.304326",
  },
  {
    id: 369,
    article_id: 101,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/0pOV7EmGD4tzv8j5Qr-jFwMxV2Wqvyca6Q.png",
    local_path: "downloaded_images/article_101_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:26.869238",
  },
  {
    id: 370,
    article_id: 102,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screen_Shot_2015-01-21_at_2.58.21_pm.png",
    local_path: "downloaded_images/article_102_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:36.500754",
  },
  {
    id: 371,
    article_id: 102,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-61-1024x439.png",
    local_path: "downloaded_images/article_102_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:36.687527",
  },
  {
    id: 372,
    article_id: 102,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1_Screen_Shot_2015-01-21_at_2.28.50_pm.png",
    local_path: "downloaded_images/article_102_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:36.889251",
  },
  {
    id: 373,
    article_id: 105,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bpWxJqTQTdNO78TmbE4xJZSbrQmKTHeT-w-e1753251997739.png",
    local_path: "downloaded_images/article_105_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:57.625026",
  },
  {
    id: 374,
    article_id: 105,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/L0MjP2eW2mJhQ4ppaFyE2ntyjXhF-_D1gg.png",
    local_path: "downloaded_images/article_105_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:16:58.14378",
  },
  {
    id: 375,
    article_id: 106,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/injecting-attached-PDF-1.png",
    local_path: "downloaded_images/article_106_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:07.587334",
  },
  {
    id: 376,
    article_id: 107,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/folder-overview-1.png",
    local_path: "downloaded_images/article_107_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:15.21562",
  },
  {
    id: 377,
    article_id: 108,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-a-new-folder-1.png",
    local_path: "downloaded_images/article_108_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:22.978147",
  },
  {
    id: 378,
    article_id: 109,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-items-to-a-folder-1.png",
    local_path: "downloaded_images/article_109_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:31.094887",
  },
  {
    id: 379,
    article_id: 109,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-items-to-a-folder-2.png",
    local_path: "downloaded_images/article_109_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:31.444493",
  },
  {
    id: 380,
    article_id: 109,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-items-to-a-folder-3-1024x687.png",
    local_path: "downloaded_images/article_109_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:31.623294",
  },
  {
    id: 381,
    article_id: 109,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-items-to-a-folder-4.png",
    local_path: "downloaded_images/article_109_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:31.797633",
  },
  {
    id: 382,
    article_id: 109,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-items-to-a-folder-5-1024x385.png",
    local_path: "downloaded_images/article_109_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:31.981248",
  },
  {
    id: 569,
    article_id: 155,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_155_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:30.544989",
  },
  {
    id: 383,
    article_id: 110,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-folder-settings-1.png",
    local_path: "downloaded_images/article_110_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:41.043522",
  },
  {
    id: 384,
    article_id: 110,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FolderSettings.png",
    local_path: "downloaded_images/article_110_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:41.386874",
  },
  {
    id: 385,
    article_id: 111,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/files-docs-overview-2.jpg",
    local_path: "downloaded_images/article_111_img_0.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:48.693872",
  },
  {
    id: 386,
    article_id: 112,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-a-new-doc-1.png",
    local_path: "downloaded_images/article_112_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:57.157195",
  },
  {
    id: 387,
    article_id: 112,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-a-new-doc-2-1024x213.png",
    local_path: "downloaded_images/article_112_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:57.333171",
  },
  {
    id: 388,
    article_id: 112,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-a-new-doc-3-1024x649.png",
    local_path: "downloaded_images/article_112_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:17:57.513191",
  },
  {
    id: 389,
    article_id: 113,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-doc-details-1-1024x314.png",
    local_path: "downloaded_images/article_113_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:06.463286",
  },
  {
    id: 390,
    article_id: 113,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-doc-details-2-1024x526.png",
    local_path: "downloaded_images/article_113_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:06.642506",
  },
  {
    id: 391,
    article_id: 113,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-doc-details-3-1024x522.png",
    local_path: "downloaded_images/article_113_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:06.827712",
  },
  {
    id: 392,
    article_id: 113,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-doc-details-4-1.png",
    local_path: "downloaded_images/article_113_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:07.005937",
  },
  {
    id: 393,
    article_id: 114,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-1.png",
    local_path: "downloaded_images/article_114_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:15.672845",
  },
  {
    id: 394,
    article_id: 114,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tasd-2.png",
    local_path: "downloaded_images/article_114_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:15.84751",
  },
  {
    id: 395,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I0zsB3TKXCH5n3ZEraBmO_wvyBJ4bxeLqg.png",
    local_path: "downloaded_images/article_115_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:24.778361",
  },
  {
    id: 396,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pNQsDYhibj-7XxN0wXFNeb-kGNqdy-R8A.png",
    local_path: "downloaded_images/article_115_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.124294",
  },
  {
    id: 397,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-3-1024x292.png",
    local_path: "downloaded_images/article_115_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.301021",
  },
  {
    id: 398,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-4-1024x258.png",
    local_path: "downloaded_images/article_115_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.474154",
  },
  {
    id: 399,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-5-1024x537.png",
    local_path: "downloaded_images/article_115_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.64751",
  },
  {
    id: 400,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-6-1024x481.png",
    local_path: "downloaded_images/article_115_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.822355",
  },
  {
    id: 401,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-7-1024x367.png",
    local_path: "downloaded_images/article_115_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:25.997903",
  },
  {
    id: 402,
    article_id: 115,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-8-869x1024.png",
    local_path: "downloaded_images/article_115_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:26.361834",
  },
  {
    id: 403,
    article_id: 116,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/KSx3-R8BuKDkZowm0Q0zH7PC03vuPeKN3Q.png",
    local_path: "downloaded_images/article_116_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:35.353129",
  },
  {
    id: 404,
    article_id: 117,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bKc33LEaVflIj5l-dRFkJJFzoCAZiKgs6w.png",
    local_path: "downloaded_images/article_117_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:48.019915",
  },
  {
    id: 405,
    article_id: 117,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/e6crPxCqfrVDIPJ7i5hdbK7MYDB-2NDSIQ.jpg",
    local_path: "downloaded_images/article_117_img_1.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:48.372861",
  },
  {
    id: 406,
    article_id: 118,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/advanced-column-settings-1-1024x523.png",
    local_path: "downloaded_images/article_118_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:56.82261",
  },
  {
    id: 407,
    article_id: 118,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/advanced-column-settings-2-1024x803.png",
    local_path: "downloaded_images/article_118_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:18:57.001024",
  },
  {
    id: 408,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bhvq8qP9yWB6GAylMIjjbMHmLeFmsTcZtQ.png",
    local_path: "downloaded_images/article_119_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:06.583358",
  },
  {
    id: 409,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-1.png",
    local_path: "downloaded_images/article_119_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:06.763676",
  },
  {
    id: 410,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-2-1024x89.png",
    local_path: "downloaded_images/article_119_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:06.945074",
  },
  {
    id: 411,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-148.png",
    local_path: "downloaded_images/article_119_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:07.12388",
  },
  {
    id: 412,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-icon.png",
    local_path: "downloaded_images/article_119_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:07.307518",
  },
  {
    id: 413,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-3.png",
    local_path: "downloaded_images/article_119_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:07.490014",
  },
  {
    id: 414,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-4.png",
    local_path: "downloaded_images/article_119_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:07.669076",
  },
  {
    id: 415,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-5-1024x277.png",
    local_path: "downloaded_images/article_119_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:07.847552",
  },
  {
    id: 416,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-6-1024x79.png",
    local_path: "downloaded_images/article_119_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:08.025355",
  },
  {
    id: 417,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-7-1024x111.png",
    local_path: "downloaded_images/article_119_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:08.202738",
  },
  {
    id: 418,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-8.png",
    local_path: "downloaded_images/article_119_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:08.379546",
  },
  {
    id: 419,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-9-1.png",
    local_path: "downloaded_images/article_119_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:08.746874",
  },
  {
    id: 420,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-10-1024x363.png",
    local_path: "downloaded_images/article_119_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:08.926438",
  },
  {
    id: 421,
    article_id: 119,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/best-pract-ds-11-1024x178.png",
    local_path: "downloaded_images/article_119_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:09.10584",
  },
  {
    id: 422,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-1-1024x348.png",
    local_path: "downloaded_images/article_121_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:24.423036",
  },
  {
    id: 423,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-2-1024x339.png",
    local_path: "downloaded_images/article_121_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:24.597339",
  },
  {
    id: 424,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-3-1024x459.png",
    local_path: "downloaded_images/article_121_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:24.774488",
  },
  {
    id: 425,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-4-1024x411.png",
    local_path: "downloaded_images/article_121_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:24.948976",
  },
  {
    id: 426,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-5-1024x459.png",
    local_path: "downloaded_images/article_121_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:25.123636",
  },
  {
    id: 427,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-6-1024x327.png",
    local_path: "downloaded_images/article_121_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:25.298641",
  },
  {
    id: 428,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-7-1-1024x484.png",
    local_path: "downloaded_images/article_121_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:25.643269",
  },
  {
    id: 429,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-8-1024x301.png",
    local_path: "downloaded_images/article_121_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:25.824627",
  },
  {
    id: 430,
    article_id: 121,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-updating-rows-9-1024x561.png",
    local_path: "downloaded_images/article_121_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:26.001925",
  },
  {
    id: 431,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-1-1024x265.png",
    local_path: "downloaded_images/article_122_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:36.583743",
  },
  {
    id: 432,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-2-1024x450.png",
    local_path: "downloaded_images/article_122_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:36.762493",
  },
  {
    id: 433,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-3-1024x430.png",
    local_path: "downloaded_images/article_122_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:36.940889",
  },
  {
    id: 434,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-4-1024x431.png",
    local_path: "downloaded_images/article_122_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:37.284362",
  },
  {
    id: 435,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-5-1024x437.png",
    local_path: "downloaded_images/article_122_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:37.461149",
  },
  {
    id: 436,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-6-1024x334.png",
    local_path: "downloaded_images/article_122_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:37.637419",
  },
  {
    id: 437,
    article_id: 122,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/viewing-ds-map-7-1024x538.png",
    local_path: "downloaded_images/article_122_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:19:37.812315",
  },
  {
    id: 438,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-1.png",
    local_path: "downloaded_images/article_124_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:00.860989",
  },
  {
    id: 439,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-2.png",
    local_path: "downloaded_images/article_124_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:01.213951",
  },
  {
    id: 440,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-6-1024x291.png",
    local_path: "downloaded_images/article_124_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:01.423917",
  },
  {
    id: 441,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-7-1024x293.png",
    local_path: "downloaded_images/article_124_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:01.959516",
  },
  {
    id: 442,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Jq0q10YmJXpnPwRoKBSsO22jME6X5pTg7g.png",
    local_path: "downloaded_images/article_124_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:02.344496",
  },
  {
    id: 443,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/XRp2mASEwCJraYaoEIHmciFWWQsQV9wcYg.png",
    local_path: "downloaded_images/article_124_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:03.087591",
  },
  {
    id: 444,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-3.png",
    local_path: "downloaded_images/article_124_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:03.286532",
  },
  {
    id: 445,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-9-1024x426.png",
    local_path: "downloaded_images/article_124_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:03.667737",
  },
  {
    id: 446,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-10-1024x490.png",
    local_path: "downloaded_images/article_124_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:03.874466",
  },
  {
    id: 447,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-11-1024x539.png",
    local_path: "downloaded_images/article_124_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:04.063479",
  },
  {
    id: 448,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-12-1024x486.png",
    local_path: "downloaded_images/article_124_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:04.251245",
  },
  {
    id: 449,
    article_id: 124,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/data-source-column-13-1024x542.png",
    local_path: "downloaded_images/article_124_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:04.428257",
  },
  {
    id: 450,
    article_id: 125,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/using-images-columns-1024x440.png",
    local_path: "downloaded_images/article_125_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:11.997804",
  },
  {
    id: 451,
    article_id: 126,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-ds-1-1024x162.png",
    local_path: "downloaded_images/article_126_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:19.677183",
  },
  {
    id: 452,
    article_id: 126,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-ds-2-1024x235.png",
    local_path: "downloaded_images/article_126_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:19.861991",
  },
  {
    id: 453,
    article_id: 126,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-ds-3-1024x235.png",
    local_path: "downloaded_images/article_126_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:20.039688",
  },
  {
    id: 454,
    article_id: 127,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-ds-1-1024x330.png",
    local_path: "downloaded_images/article_127_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:27.423182",
  },
  {
    id: 455,
    article_id: 127,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/editing-ds-2-1024x235.png",
    local_path: "downloaded_images/article_127_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:27.597772",
  },
  {
    id: 456,
    article_id: 128,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fVBNgJPsb2vLmi87THNzIjhYYSqY_ygjGw.png",
    local_path: "downloaded_images/article_128_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:35.348117",
  },
  {
    id: 457,
    article_id: 128,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-task-temp-1-1024x114.png",
    local_path: "downloaded_images/article_128_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:35.526876",
  },
  {
    id: 458,
    article_id: 128,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mFWyDX15FKI6W0mASwrjp9KzGuUZfqM_yQ.png",
    local_path: "downloaded_images/article_128_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:35.874803",
  },
  {
    id: 459,
    article_id: 128,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-task-temp-2-1024x303.png",
    local_path: "downloaded_images/article_128_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:36.07294",
  },
  {
    id: 460,
    article_id: 129,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-bigq-task-con-1.png",
    local_path: "downloaded_images/article_129_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:43.968376",
  },
  {
    id: 461,
    article_id: 129,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-bigq-task-con-2-1024x402.png",
    local_path: "downloaded_images/article_129_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:44.156921",
  },
  {
    id: 462,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/task-templates-5-1-1024x537.png",
    local_path: "downloaded_images/article_130_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:52.405432",
  },
  {
    id: 463,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-1-1024x319.png",
    local_path: "downloaded_images/article_130_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:52.586419",
  },
  {
    id: 464,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-2-1024x620.png",
    local_path: "downloaded_images/article_130_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:52.764581",
  },
  {
    id: 465,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/gPErLMUyC1Mk56y-k5Ow0GJkL459xQAw1A.png",
    local_path: "downloaded_images/article_130_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:53.112394",
  },
  {
    id: 466,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-3.png",
    local_path: "downloaded_images/article_130_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:53.289429",
  },
  {
    id: 467,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-4.png",
    local_path: "downloaded_images/article_130_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:53.465144",
  },
  {
    id: 468,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-5-1024x233.png",
    local_path: "downloaded_images/article_130_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:53.642248",
  },
  {
    id: 469,
    article_id: 130,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/setting-up-task-connectors-6-1024x586.png",
    local_path: "downloaded_images/article_130_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:20:53.819373",
  },
  {
    id: 470,
    article_id: 131,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_131_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:01.385627",
  },
  {
    id: 471,
    article_id: 131,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oauth2-1024x174.png",
    local_path: "downloaded_images/article_131_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:01.564968",
  },
  {
    id: 472,
    article_id: 131,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oauth2-3-1024x517.png",
    local_path: "downloaded_images/article_131_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:01.741321",
  },
  {
    id: 473,
    article_id: 131,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oauth2-2-1024x173.png",
    local_path: "downloaded_images/article_131_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:01.932438",
  },
  {
    id: 474,
    article_id: 131,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oauth2-1-1-1024x876.png",
    local_path: "downloaded_images/article_131_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:02.110534",
  },
  {
    id: 475,
    article_id: 132,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_132_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:10.71234",
  },
  {
    id: 522,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NvQk5vs_2l7Km83_v6bGJuu7gm4dvTucvQ.png",
    local_path: "downloaded_images/article_143_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:58.682135",
  },
  {
    id: 476,
    article_id: 132,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11127129062/original/QKlAAGQ8t2Qpz04LIfY7f9jMAZgXuYtVvQ.png?1743691547",
    local_path: "downloaded_images/article_132_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:11.608176",
  },
  {
    id: 477,
    article_id: 132,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11127129435/original/Bm7R_3ri0Pf5WF9O5OrYWtqaxJRsgRWM_w.png?1743691924",
    local_path: "downloaded_images/article_132_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:12.005111",
  },
  {
    id: 478,
    article_id: 132,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/7LhJuR5PuvJrO9wJybkTffBrwOecBMr0dA.png",
    local_path: "downloaded_images/article_132_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:12.521191",
  },
  {
    id: 479,
    article_id: 132,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11127129188/original/EMyH_Uc1hGv0InPWv1p-ZaBdZn_GZgBrrA.png?1743691658",
    local_path: "downloaded_images/article_132_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:12.839596",
  },
  {
    id: 480,
    article_id: 132,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-3-1024x458.png",
    local_path: "downloaded_images/article_132_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:13.183516",
  },
  {
    id: 481,
    article_id: 132,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-4-1024x420.png",
    local_path: "downloaded_images/article_132_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:13.360892",
  },
  {
    id: 482,
    article_id: 133,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-110.png",
    local_path: "downloaded_images/article_133_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:20.79147",
  },
  {
    id: 483,
    article_id: 133,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/quickbook-connector-1.png",
    local_path: "downloaded_images/article_133_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:20.974009",
  },
  {
    id: 484,
    article_id: 134,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_134_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:28.753936",
  },
  {
    id: 485,
    article_id: 134,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/box-connection.png",
    local_path: "downloaded_images/article_134_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:28.930095",
  },
  {
    id: 486,
    article_id: 135,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_135_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:36.643989",
  },
  {
    id: 487,
    article_id: 135,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xero-1024x235.png",
    local_path: "downloaded_images/article_135_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:36.826894",
  },
  {
    id: 488,
    article_id: 136,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_136_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:44.394938",
  },
  {
    id: 489,
    article_id: 136,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/onedrive-personal-1024x214.png",
    local_path: "downloaded_images/article_136_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:44.566212",
  },
  {
    id: 490,
    article_id: 136,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/onedrive-business-1024x234.png",
    local_path: "downloaded_images/article_136_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:44.74126",
  },
  {
    id: 491,
    article_id: 137,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_137_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:52.492974",
  },
  {
    id: 492,
    article_id: 137,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/postgresql-1024x246.png",
    local_path: "downloaded_images/article_137_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:21:52.668684",
  },
  {
    id: 493,
    article_id: 138,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_138_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:02.790085",
  },
  {
    id: 494,
    article_id: 138,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/powerbi-1024x490.png",
    local_path: "downloaded_images/article_138_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:02.981752",
  },
  {
    id: 495,
    article_id: 138,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/7AKv3ggfzJRI1xY17FzZJDrLmO3e9QJJ4w.png",
    local_path: "downloaded_images/article_138_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:03.331485",
  },
  {
    id: 496,
    article_id: 138,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/M_VBl34sXEtYG_IdNVQ-Bql9qM51HDdP2A.png",
    local_path: "downloaded_images/article_138_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:03.511027",
  },
  {
    id: 497,
    article_id: 138,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2ePwdut5zNJOuSinOM_UJQRE1njylti-Og.png",
    local_path: "downloaded_images/article_138_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:03.697428",
  },
  {
    id: 498,
    article_id: 139,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_139_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:11.771272",
  },
  {
    id: 499,
    article_id: 139,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mysql-1024x227.png",
    local_path: "downloaded_images/article_139_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:11.94684",
  },
  {
    id: 500,
    article_id: 140,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_140_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:19.697776",
  },
  {
    id: 501,
    article_id: 140,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/twilio-1024x247.png",
    local_path: "downloaded_images/article_140_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:19.871971",
  },
  {
    id: 502,
    article_id: 141,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_141_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:28.168769",
  },
  {
    id: 503,
    article_id: 141,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sql-server-1024x234.png",
    local_path: "downloaded_images/article_141_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:28.341481",
  },
  {
    id: 504,
    article_id: 142,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_142_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:36.64707",
  },
  {
    id: 505,
    article_id: 142,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/snowflake-1024x377.png",
    local_path: "downloaded_images/article_142_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:36.823826",
  },
  {
    id: 506,
    article_id: 142,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/snowflake-2-1024x518.png",
    local_path: "downloaded_images/article_142_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:37.000713",
  },
  {
    id: 507,
    article_id: 142,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hbgxyoWYcluTiy86Gt1Et1kAxwHo7AIvaw.png",
    local_path: "downloaded_images/article_142_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:37.17593",
  },
  {
    id: 508,
    article_id: 142,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/snowflake-3-1024x315.png",
    local_path: "downloaded_images/article_142_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:37.356341",
  },
  {
    id: 509,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/netsuite-1-1024x467.png",
    local_path: "downloaded_images/article_143_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:55.750659",
  },
  {
    id: 510,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Hdc9mNei2HI8iQZHhUHZdwSGJ24FSo4AoA.png",
    local_path: "downloaded_images/article_143_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:56.448479",
  },
  {
    id: 511,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nXZVhDiHsTS6tN0Mt7hsUYYQGJ6DBMy1_A.png",
    local_path: "downloaded_images/article_143_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:56.645112",
  },
  {
    id: 512,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fVn9kPu0oIfyBAziLF91Rwf0WinAgStYLQ.png",
    local_path: "downloaded_images/article_143_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:56.847218",
  },
  {
    id: 513,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Z8brNXlY-UNncBN3q4jpsJ6dW3B7T2VuIA.png",
    local_path: "downloaded_images/article_143_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.03996",
  },
  {
    id: 514,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/6s2GimpZJ1n8MBDGdaGTCf5Kb3WOx31o4g.png",
    local_path: "downloaded_images/article_143_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.217803",
  },
  {
    id: 515,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/uVo8Wr-JrVnzVXAGMoKVtX1stywl44hSjQ.png",
    local_path: "downloaded_images/article_143_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.399899",
  },
  {
    id: 516,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ElX86HBJLGrrS7ud2OXJHMfOqjqWS5XwKA.png",
    local_path: "downloaded_images/article_143_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.599051",
  },
  {
    id: 517,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kCT0wtfN0u2cARrkBJIlO11QDsxYam3fvg.png",
    local_path: "downloaded_images/article_143_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.775335",
  },
  {
    id: 518,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mSYsmrCRPDjgAePJzviR9jZHKXkEOiwUkg.png",
    local_path: "downloaded_images/article_143_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:57.953915",
  },
  {
    id: 519,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/pmhnkykgFuHIUepWpdnnnD-CVX5E17EhGw.png",
    local_path: "downloaded_images/article_143_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:58.13275",
  },
  {
    id: 520,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bFfGSdiQqEUw7Jbu5rpMnrfRnwzvoeeE9A.png",
    local_path: "downloaded_images/article_143_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:58.317917",
  },
  {
    id: 521,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ngMPygiBMfcykYK14ws1nMfCr45z_ZUw.png",
    local_path: "downloaded_images/article_143_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:58.501786",
  },
  {
    id: 523,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kTfQfCrl6SyjpMoY5EEy1Lix80BIefv0yg.png",
    local_path: "downloaded_images/article_143_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:58.865692",
  },
  {
    id: 524,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/jfiCNpM8qNnz3xhKTG8vGMWno_CE-P2ckQ.png",
    local_path: "downloaded_images/article_143_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:59.053084",
  },
  {
    id: 525,
    article_id: 143,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2E-95w30TYsE3EyHHAumWu4ndWATZt2Wuw.png",
    local_path: "downloaded_images/article_143_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:22:59.231697",
  },
  {
    id: 526,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_145_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:35:33.316718",
  },
  {
    id: 527,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-cloud-1024x370.png",
    local_path: "downloaded_images/article_145_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:35:33.500456",
  },
  {
    id: 528,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/m6wOxiXeIcX_TxJSPzyDIAzK1f3ct2ecAA.png",
    local_path: "downloaded_images/article_145_img_2.png",
    alt_text: "Menu",
    downloaded_at: "2025-10-21T17:35:33.676497",
  },
  {
    id: 529,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_145_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:09.721597",
  },
  {
    id: 530,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-cloud-1024x370.png",
    local_path: "downloaded_images/article_145_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:09.906807",
  },
  {
    id: 531,
    article_id: 145,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/m6wOxiXeIcX_TxJSPzyDIAzK1f3ct2ecAA.png",
    local_path: "downloaded_images/article_145_img_2.png",
    alt_text: "Menu",
    downloaded_at: "2025-10-21T17:37:10.081655",
  },
  {
    id: 532,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_147_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:18.420796",
  },
  {
    id: 533,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ms-graph-1024x307.png",
    local_path: "downloaded_images/article_147_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:18.596816",
  },
  {
    id: 534,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/H0e_olcJJCy9Uun_hzBtSjdHwAe7vNAVow.png",
    local_path: "downloaded_images/article_147_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:18.948764",
  },
  {
    id: 535,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/AdW-uai87z_zDXdchI3oeoU9Q4SWklHtDA.png",
    local_path: "downloaded_images/article_147_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:19.298568",
  },
  {
    id: 536,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/8Z1gOCFyNCcX2yKqmMbViReRnrM6GQsbSQ.png",
    local_path: "downloaded_images/article_147_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:19.484475",
  },
  {
    id: 537,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Kr5RGdCUfPpPpVDqx4SCVFd1M-6jtv6R1w.png",
    local_path: "downloaded_images/article_147_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:19.669448",
  },
  {
    id: 538,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xA2bTBYlBUiL1aEKt6QqCMJScxmJmdO57g.png",
    local_path: "downloaded_images/article_147_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:19.854631",
  },
  {
    id: 539,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IT2MFFB6pX34CkYWxZOOVusFMZXctsHasg.png",
    local_path: "downloaded_images/article_147_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.041055",
  },
  {
    id: 540,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/F0_0dxCkE1ocdj5wsSjZQeyuirWfFApkeg.png",
    local_path: "downloaded_images/article_147_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.236502",
  },
  {
    id: 541,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1VeRuQUBrexS467jQXzW7A7z8gHCVnIE3g.png",
    local_path: "downloaded_images/article_147_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.413554",
  },
  {
    id: 542,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Ti2JAonSNmDEjWQbjccTi2wwYVGE8O_fyQ.png",
    local_path: "downloaded_images/article_147_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.604725",
  },
  {
    id: 543,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/CvqqWfwWI-vJsnl9cObJZltEtvoaDcPtZQ.png",
    local_path: "downloaded_images/article_147_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.792176",
  },
  {
    id: 544,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/9iFikhHj89F9GZ8yQIQbdlrKT8JQZaLFrA.png",
    local_path: "downloaded_images/article_147_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:20.977443",
  },
  {
    id: 545,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FjHFniHvb1GDrdESoThQUVqILaku4EsuEg.png",
    local_path: "downloaded_images/article_147_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:21.159847",
  },
  {
    id: 546,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5n4qImhyf0md9UgWrgWKKc-fBsnIC-u2Ew.png",
    local_path: "downloaded_images/article_147_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:21.341568",
  },
  {
    id: 547,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/6ZayubJIzJcoIKi8h90FJg7KGaeY5hZKig.png",
    local_path: "downloaded_images/article_147_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:21.542497",
  },
  {
    id: 548,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/8PnFoaUjCADMAhRNI1UnZGKj1-bPx3QxSQ.png",
    local_path: "downloaded_images/article_147_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:21.722682",
  },
  {
    id: 549,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/yYgT6MoWllmUqh2d9U4dpNoJvB-5I_YV-w.png",
    local_path: "downloaded_images/article_147_img_17.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:21.902177",
  },
  {
    id: 550,
    article_id: 147,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fTDmbnG7LgfCQr-LGYBcNpjZwrZ6V04yA.png",
    local_path: "downloaded_images/article_147_img_18.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:22.082072",
  },
  {
    id: 551,
    article_id: 148,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_148_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:29.863131",
  },
  {
    id: 552,
    article_id: 148,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ftp-1-1024x375.png",
    local_path: "downloaded_images/article_148_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:30.044218",
  },
  {
    id: 553,
    article_id: 149,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_149_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:37.804978",
  },
  {
    id: 554,
    article_id: 149,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dropbox-conn-1-1024x161.png",
    local_path: "downloaded_images/article_149_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:37.983194",
  },
  {
    id: 555,
    article_id: 150,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_150_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:47.088206",
  },
  {
    id: 556,
    article_id: 150,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-1-1024x245.png",
    local_path: "downloaded_images/article_150_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:47.268686",
  },
  {
    id: 557,
    article_id: 150,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/V20dtd3MKb6ZsoIEN35ABl74es0OX5csHw.png",
    local_path: "downloaded_images/article_150_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:47.444334",
  },
  {
    id: 558,
    article_id: 150,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nbqDOeNpVf75BN4Lyygl8MYIzYrQRY-4w.png",
    local_path: "downloaded_images/article_150_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:47.783608",
  },
  {
    id: 559,
    article_id: 150,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/3w504_nzMVRNcqURN5o4yWdvx32X1RPAig.png",
    local_path: "downloaded_images/article_150_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:47.955754",
  },
  {
    id: 560,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_151_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:55.738068",
  },
  {
    id: 561,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-1024x363.png",
    local_path: "downloaded_images/article_151_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:55.919754",
  },
  {
    id: 562,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-connection-2-1.png",
    local_path: "downloaded_images/article_151_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:56.096361",
  },
  {
    id: 563,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-connection-5-1024x636.png",
    local_path: "downloaded_images/article_151_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:56.272818",
  },
  {
    id: 564,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-connection-8-1024x237.png",
    local_path: "downloaded_images/article_151_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:56.454465",
  },
  {
    id: 565,
    article_id: 151,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-connection-9-1.png",
    local_path: "downloaded_images/article_151_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:37:56.634914",
  },
  {
    id: 566,
    article_id: 152,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/aws-connector-1-1024x229.png",
    local_path: "downloaded_images/article_152_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:04.031685",
  },
  {
    id: 567,
    article_id: 154,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-77.png",
    local_path: "downloaded_images/article_154_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:21.943936",
  },
  {
    id: 568,
    article_id: 154,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/add-connection.png",
    local_path: "downloaded_images/article_154_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:22.120702",
  },
  {
    id: 570,
    article_id: 155,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-1024x210.png",
    local_path: "downloaded_images/article_155_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:30.728082",
  },
  {
    id: 571,
    article_id: 155,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google2-1024x201.png",
    local_path: "downloaded_images/article_155_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:30.916689",
  },
  {
    id: 572,
    article_id: 155,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/PfcaQV-H77GjolPkDqAo9v2lKuMbntD2Xg.png",
    local_path: "downloaded_images/article_155_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:31.096644",
  },
  {
    id: 573,
    article_id: 156,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/FRrjE4hpqVIvmnMYKOSaynMfvXUQIwLC8w.png",
    local_path: "downloaded_images/article_156_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:40.428547",
  },
  {
    id: 574,
    article_id: 156,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-connector-1-1024x63.png",
    local_path: "downloaded_images/article_156_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:40.604325",
  },
  {
    id: 575,
    article_id: 156,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-connector-2-1024x587.png",
    local_path: "downloaded_images/article_156_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:40.779387",
  },
  {
    id: 576,
    article_id: 156,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-53-1024x748.png",
    local_path: "downloaded_images/article_156_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:40.964045",
  },
  {
    id: 577,
    article_id: 156,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-connector-4.png",
    local_path: "downloaded_images/article_156_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:41.14304",
  },
  {
    id: 578,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_157_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:49.267174",
  },
  {
    id: 579,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-1-1024x364.png",
    local_path: "downloaded_images/article_157_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:49.446091",
  },
  {
    id: 580,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-connector-3.png",
    local_path: "downloaded_images/article_157_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:49.799815",
  },
  {
    id: 581,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-connector-4.png",
    local_path: "downloaded_images/article_157_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:49.984047",
  },
  {
    id: 582,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-connector-5.png",
    local_path: "downloaded_images/article_157_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:50.16529",
  },
  {
    id: 583,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-connector-6-1024x259.png",
    local_path: "downloaded_images/article_157_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:50.343755",
  },
  {
    id: 584,
    article_id: 157,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/geoop-form-connector-7.png",
    local_path: "downloaded_images/article_157_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:50.522299",
  },
  {
    id: 585,
    article_id: 158,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-1-1.png",
    local_path: "downloaded_images/article_158_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:59.651927",
  },
  {
    id: 586,
    article_id: 158,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-2.png",
    local_path: "downloaded_images/article_158_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:38:59.854227",
  },
  {
    id: 587,
    article_id: 158,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/dropbox-form-1-1024x495.png",
    local_path: "downloaded_images/article_158_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:00.029199",
  },
  {
    id: 588,
    article_id: 158,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/add-data-template.png",
    local_path: "downloaded_images/article_158_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:00.205771",
  },
  {
    id: 589,
    article_id: 158,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/add-run-condition.png",
    local_path: "downloaded_images/article_158_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:00.382343",
  },
  {
    id: 590,
    article_id: 159,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_159_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:08.135503",
  },
  {
    id: 591,
    article_id: 159,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/quickbook-form-2-1024x548.png",
    local_path: "downloaded_images/article_159_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:08.316734",
  },
  {
    id: 592,
    article_id: 159,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/quickbook-connector-4.png",
    local_path: "downloaded_images/article_159_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:08.496212",
  },
  {
    id: 593,
    article_id: 160,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-1-1.png",
    local_path: "downloaded_images/article_160_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:16.286648",
  },
  {
    id: 594,
    article_id: 160,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-2.png",
    local_path: "downloaded_images/article_160_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:16.463343",
  },
  {
    id: 595,
    article_id: 160,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/box-form-connection-1-1024x381.png",
    local_path: "downloaded_images/article_160_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:16.638728",
  },
  {
    id: 596,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-1-1.png",
    local_path: "downloaded_images/article_161_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:24.687962",
  },
  {
    id: 597,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-2.png",
    local_path: "downloaded_images/article_161_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:25.690909",
  },
  {
    id: 598,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-3-1024x250.png",
    local_path: "downloaded_images/article_161_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:25.868652",
  },
  {
    id: 599,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-4-1024x784.png",
    local_path: "downloaded_images/article_161_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:26.047403",
  },
  {
    id: 600,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-5-1024x554.png",
    local_path: "downloaded_images/article_161_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:26.224774",
  },
  {
    id: 601,
    article_id: 161,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_161_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:26.400794",
  },
  {
    id: 602,
    article_id: 162,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_162_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:34.66265",
  },
  {
    id: 603,
    article_id: 162,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ftp-form-1-1024x514.png",
    local_path: "downloaded_images/article_162_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:34.841025",
  },
  {
    id: 604,
    article_id: 162,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_162_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:35.023415",
  },
  {
    id: 605,
    article_id: 163,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-sql-1-1024x400.png",
    local_path: "downloaded_images/article_163_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:42.773181",
  },
  {
    id: 606,
    article_id: 163,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/custom-sql-2-1024x640.png",
    local_path: "downloaded_images/article_163_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:42.959369",
  },
  {
    id: 607,
    article_id: 164,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_164_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:50.715885",
  },
  {
    id: 608,
    article_id: 164,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/twilio-form-1024x295.png",
    local_path: "downloaded_images/article_164_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:50.895773",
  },
  {
    id: 609,
    article_id: 165,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_165_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:58.645973",
  },
  {
    id: 610,
    article_id: 165,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sqlserver-form-1024x628.png",
    local_path: "downloaded_images/article_165_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:58.825347",
  },
  {
    id: 611,
    article_id: 165,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_165_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:39:59.003851",
  },
  {
    id: 612,
    article_id: 166,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_166_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:07.740668",
  },
  {
    id: 613,
    article_id: 166,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/snowflake-form-1024x714.png",
    local_path: "downloaded_images/article_166_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:07.918415",
  },
  {
    id: 614,
    article_id: 167,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_167_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:16.62266",
  },
  {
    id: 615,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128304320/original/X8Z-GpVEVRNLx03Vp1tt66WBI6wldX7Y4Q.png?1746463135",
    local_path: "downloaded_images/article_167_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:17.661448",
  },
  {
    id: 616,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128307309/original/ssOVHMnozx3L6AKB3yDWjAj4krs0M4fdug.png",
    local_path: "downloaded_images/article_167_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:18.157162",
  },
  {
    id: 617,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128308372/original/vlmnGkSOmLwoQOIWGBRxxn8OvxZMdLLhSA.png",
    local_path: "downloaded_images/article_167_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:18.298564",
  },
  {
    id: 618,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128308448/original/zVQgvTOS_lN2-b7u1BGTLXr_HgIs2aurLg.png?1746468210",
    local_path: "downloaded_images/article_167_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:18.424659",
  },
  {
    id: 619,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128308505/original/QrNgY8a5j_D6zbQ1HwyO5lMRhuOHa0Prbw.png",
    local_path: "downloaded_images/article_167_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:18.544377",
  },
  {
    id: 620,
    article_id: 167,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128308554/original/aOshDHgNAycTaSywHwqyTJBhXRsc9RHDcA.png?1746468377",
    local_path: "downloaded_images/article_167_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:18.66656",
  },
  {
    id: 621,
    article_id: 168,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_168_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:26.448874",
  },
  {
    id: 622,
    article_id: 168,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-list-form-1-1024x292.png",
    local_path: "downloaded_images/article_168_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:26.628183",
  },
  {
    id: 623,
    article_id: 168,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-list-form-2-1024x758.png",
    local_path: "downloaded_images/article_168_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:26.816581",
  },
  {
    id: 624,
    article_id: 168,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_168_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:26.993553",
  },
  {
    id: 625,
    article_id: 169,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_169_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:34.495775",
  },
  {
    id: 626,
    article_id: 169,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/onedrive-personal-form-1024x398.png",
    local_path: "downloaded_images/article_169_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:34.673381",
  },
  {
    id: 627,
    article_id: 170,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_170_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:44.16377",
  },
  {
    id: 628,
    article_id: 170,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/netsuite-form-1.png",
    local_path: "downloaded_images/article_170_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:44.507339",
  },
  {
    id: 629,
    article_id: 170,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5PbSaQxalsiU2tn1bL-YfYJ-3SPT-M-llQ.png",
    local_path: "downloaded_images/article_170_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:44.855105",
  },
  {
    id: 630,
    article_id: 170,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ATmN23vHguYlaPjqPEI99qpa3TKg_M1-Iw.png",
    local_path: "downloaded_images/article_170_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:45.034201",
  },
  {
    id: 631,
    article_id: 170,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/QORy8IqUnZD_PbXKe18Q2i0-VHLya3z-wg.png",
    local_path: "downloaded_images/article_170_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:45.729579",
  },
  {
    id: 632,
    article_id: 171,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_171_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:53.11484",
  },
  {
    id: 633,
    article_id: 171,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/big-query-1-1024x772.png",
    local_path: "downloaded_images/article_171_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:40:53.292628",
  },
  {
    id: 634,
    article_id: 172,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_172_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:00.886995",
  },
  {
    id: 635,
    article_id: 172,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-doc-form-1024x401.png",
    local_path: "downloaded_images/article_172_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:01.071386",
  },
  {
    id: 636,
    article_id: 173,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_173_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:09.674346",
  },
  {
    id: 637,
    article_id: 173,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-form-1024x356.png",
    local_path: "downloaded_images/article_173_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:09.851887",
  },
  {
    id: 638,
    article_id: 174,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_174_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:18.673154",
  },
  {
    id: 639,
    article_id: 174,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/powerbi-form-1024x447.png",
    local_path: "downloaded_images/article_174_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:18.85023",
  },
  {
    id: 640,
    article_id: 174,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ql21YOWiBvSoJ7ttCQRCEOi7xq6QJ3olKw.png",
    local_path: "downloaded_images/article_174_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:19.365073",
  },
  {
    id: 641,
    article_id: 175,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_175_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:26.930483",
  },
  {
    id: 642,
    article_id: 175,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/postgresql-form-1024x625.png",
    local_path: "downloaded_images/article_175_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:27.111889",
  },
  {
    id: 643,
    article_id: 175,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_175_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:27.286783",
  },
  {
    id: 644,
    article_id: 176,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_176_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:35.527093",
  },
  {
    id: 645,
    article_id: 176,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mysql-form.png",
    local_path: "downloaded_images/article_176_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:35.708161",
  },
  {
    id: 646,
    article_id: 176,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-6-1.png",
    local_path: "downloaded_images/article_176_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:35.885382",
  },
  {
    id: 647,
    article_id: 177,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_177_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:43.97592",
  },
  {
    id: 648,
    article_id: 177,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Spreadsheet-Form-e1750353418165-1024x340.png",
    local_path: "downloaded_images/article_177_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:44.155902",
  },
  {
    id: 649,
    article_id: 178,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_178_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:51.927888",
  },
  {
    id: 650,
    article_id: 178,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/drive-connector-3-1024x291.png",
    local_path: "downloaded_images/article_178_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:41:52.106464",
  },
  {
    id: 651,
    article_id: 179,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_179_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:00.204106",
  },
  {
    id: 652,
    article_id: 179,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/excel-connector-1024x543.png",
    local_path: "downloaded_images/article_179_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:00.380726",
  },
  {
    id: 653,
    article_id: 179,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/excel-connector-2-1024x582.png",
    local_path: "downloaded_images/article_179_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:00.558345",
  },
  {
    id: 654,
    article_id: 180,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_180_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:09.082346",
  },
  {
    id: 655,
    article_id: 180,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/box-form-connector-1024x362.png",
    local_path: "downloaded_images/article_180_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:09.26199",
  },
  {
    id: 656,
    article_id: 181,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_181_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:17.04977",
  },
  {
    id: 657,
    article_id: 181,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/amazon-fc-2-1024x454.png",
    local_path: "downloaded_images/article_181_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:17.237107",
  },
  {
    id: 658,
    article_id: 184,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-194.png",
    local_path: "downloaded_images/article_184_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:37.32087",
  },
  {
    id: 659,
    article_id: 184,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-195.png",
    local_path: "downloaded_images/article_184_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:37.500694",
  },
  {
    id: 660,
    article_id: 184,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-196-1024x58.png",
    local_path: "downloaded_images/article_184_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:37.673958",
  },
  {
    id: 661,
    article_id: 185,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_185_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:45.911107",
  },
  {
    id: 662,
    article_id: 185,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JGi06Jc9IJMt1khMMV4f8-O2AQRFwsM5XQ.png",
    local_path: "downloaded_images/article_185_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:46.261366",
  },
  {
    id: 663,
    article_id: 185,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rJpJd7L8qgxkWKwBf95CROPJs1v_IVsEQg.png",
    local_path: "downloaded_images/article_185_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:46.44144",
  },
  {
    id: 664,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-1-1024x539.png",
    local_path: "downloaded_images/article_186_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:58.279717",
  },
  {
    id: 665,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/0HAY5Ry-TxC7SATaVo2Q_y4s4pJNBBxjUg.png",
    local_path: "downloaded_images/article_186_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:58.465696",
  },
  {
    id: 666,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/WtOHWArExxJ3PBudC9g8x9fhjmj1WHzTw.png",
    local_path: "downloaded_images/article_186_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:58.644371",
  },
  {
    id: 667,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/YyNXbOWWGqgjNUti5AxUT81Yjma5bR10Sw.png",
    local_path: "downloaded_images/article_186_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:58.822222",
  },
  {
    id: 668,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/SPIjAHGEjJ_0XNjUqBjK0UrQKxavYR4bFA.png",
    local_path: "downloaded_images/article_186_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:58.998862",
  },
  {
    id: 669,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2A6FLKz5k9WNQMwl4uDMlqDIU7Z5XYnUWw.png",
    local_path: "downloaded_images/article_186_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:59.367596",
  },
  {
    id: 670,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ZlfCaDaK76Bx9W05vdziJ4n9nT_VPOBMhA.png",
    local_path: "downloaded_images/article_186_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:59.549572",
  },
  {
    id: 671,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/payroll-AU-timesheet-table-1024x912.png",
    local_path: "downloaded_images/article_186_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:59.728265",
  },
  {
    id: 672,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/payroll-AU-timesheet-xero-connector-1024x482.png",
    local_path: "downloaded_images/article_186_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:42:59.907453",
  },
  {
    id: 673,
    article_id: 186,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/payroll-nz-uk-1024x318.png",
    local_path: "downloaded_images/article_186_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:00.084392",
  },
  {
    id: 674,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-connector-1.png",
    local_path: "downloaded_images/article_188_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:14.392918",
  },
  {
    id: 675,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/egnyte-form-0-1024x194.png",
    local_path: "downloaded_images/article_188_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:14.571318",
  },
  {
    id: 676,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-ds-1.png",
    local_path: "downloaded_images/article_188_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:14.749687",
  },
  {
    id: 677,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-ds-2-1-1024x177.png",
    local_path: "downloaded_images/article_188_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:14.927984",
  },
  {
    id: 678,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/egnyte-form-2-1024x241.png",
    local_path: "downloaded_images/article_188_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:15.108604",
  },
  {
    id: 679,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-1-1.png",
    local_path: "downloaded_images/article_188_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:15.289576",
  },
  {
    id: 680,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-fc-2.png",
    local_path: "downloaded_images/article_188_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:15.466185",
  },
  {
    id: 681,
    article_id: 188,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-106-1024x366.png",
    local_path: "downloaded_images/article_188_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:15.645477",
  },
  {
    id: 682,
    article_id: 189,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_189_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:23.222256",
  },
  {
    id: 683,
    article_id: 189,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/quickbook-form-1.png",
    local_path: "downloaded_images/article_189_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:23.396835",
  },
  {
    id: 684,
    article_id: 190,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_190_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:31.157171",
  },
  {
    id: 685,
    article_id: 190,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xero-ds-1024x392.png",
    local_path: "downloaded_images/article_190_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:31.3386",
  },
  {
    id: 686,
    article_id: 191,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_191_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:39.103273",
  },
  {
    id: 687,
    article_id: 191,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/onedrive-personal-ds-1024x290.png",
    local_path: "downloaded_images/article_191_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:39.281375",
  },
  {
    id: 688,
    article_id: 192,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_192_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:47.500179",
  },
  {
    id: 689,
    article_id: 192,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/netsuite-ds.png",
    local_path: "downloaded_images/article_192_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:43:47.676781",
  },
  {
    id: 690,
    article_id: 194,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_194_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:02.474665",
  },
  {
    id: 691,
    article_id: 194,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mysql-ds-1024x359.png",
    local_path: "downloaded_images/article_194_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:02.647613",
  },
  {
    id: 692,
    article_id: 195,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_195_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:10.400598",
  },
  {
    id: 693,
    article_id: 195,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/spreadsheet-ds-1-1024x287.png",
    local_path: "downloaded_images/article_195_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:10.578354",
  },
  {
    id: 694,
    article_id: 195,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/spreadsheet-ds-2-1024x286.png",
    local_path: "downloaded_images/article_195_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:10.75488",
  },
  {
    id: 695,
    article_id: 196,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_196_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:18.48101",
  },
  {
    id: 696,
    article_id: 196,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-ds-1024x470.png",
    local_path: "downloaded_images/article_196_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:18.661025",
  },
  {
    id: 697,
    article_id: 196,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-ds-2-1024x472.png",
    local_path: "downloaded_images/article_196_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:18.840502",
  },
  {
    id: 698,
    article_id: 196,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rest-ds-3-1024x768.png",
    local_path: "downloaded_images/article_196_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:19.026311",
  },
  {
    id: 699,
    article_id: 197,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_197_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:26.924963",
  },
  {
    id: 700,
    article_id: 197,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-bigq-ds.png",
    local_path: "downloaded_images/article_197_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:27.269097",
  },
  {
    id: 701,
    article_id: 198,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_198_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:34.621078",
  },
  {
    id: 702,
    article_id: 199,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_199_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:42.410531",
  },
  {
    id: 703,
    article_id: 199,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/postgresql-ds-1024x414.png",
    local_path: "downloaded_images/article_199_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:42.591555",
  },
  {
    id: 704,
    article_id: 200,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_200_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:50.308245",
  },
  {
    id: 705,
    article_id: 200,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sqlserver-ds-1024x413.png",
    local_path: "downloaded_images/article_200_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:50.493976",
  },
  {
    id: 706,
    article_id: 201,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_201_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:57.941456",
  },
  {
    id: 707,
    article_id: 201,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/snowflake-ds-1024x472.png",
    local_path: "downloaded_images/article_201_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:44:58.119405",
  },
  {
    id: 708,
    article_id: 202,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_202_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:07.37212",
  },
  {
    id: 709,
    article_id: 202,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-ds-1-1024x458.png",
    local_path: "downloaded_images/article_202_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:07.54781",
  },
  {
    id: 710,
    article_id: 202,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sharepoint-ds-2-1024x454.png",
    local_path: "downloaded_images/article_202_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:07.728428",
  },
  {
    id: 711,
    article_id: 203,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_203_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:16.494311",
  },
  {
    id: 712,
    article_id: 203,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ftp-ds-1.png",
    local_path: "downloaded_images/article_203_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:16.681512",
  },
  {
    id: 713,
    article_id: 204,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_204_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:24.611069",
  },
  {
    id: 714,
    article_id: 204,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/salesforce-ds-1024x363.png",
    local_path: "downloaded_images/article_204_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:24.796424",
  },
  {
    id: 715,
    article_id: 205,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_205_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:32.527556",
  },
  {
    id: 716,
    article_id: 205,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dropbox-ds-1024x275.png",
    local_path: "downloaded_images/article_205_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:32.705072",
  },
  {
    id: 717,
    article_id: 206,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_206_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:40.455804",
  },
  {
    id: 718,
    article_id: 206,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/box-ds-connection-1024x169.png",
    local_path: "downloaded_images/article_206_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:40.636595",
  },
  {
    id: 719,
    article_id: 207,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_207_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:48.682194",
  },
  {
    id: 720,
    article_id: 207,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/arcgis-ds-3-1024x259.png",
    local_path: "downloaded_images/article_207_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:48.861576",
  },
  {
    id: 721,
    article_id: 208,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/07/image-2-1024x419.png",
    local_path: "downloaded_images/article_208_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:56.611456",
  },
  {
    id: 722,
    article_id: 208,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/amazon-ds-13-1-1024x253.png",
    local_path: "downloaded_images/article_208_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:45:56.786955",
  },
  {
    id: 723,
    article_id: 210,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/external-user-connector-rest.png",
    local_path: "downloaded_images/article_210_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:11.465603",
  },
  {
    id: 724,
    article_id: 211,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-71.png",
    local_path: "downloaded_images/article_211_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:28.810775",
  },
  {
    id: 725,
    article_id: 211,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-75.png",
    local_path: "downloaded_images/article_211_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:28.989653",
  },
  {
    id: 726,
    article_id: 211,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/MwMsfnZZgmdUVOSwXqLX_GpUwrUrBQg5gg.png",
    local_path: "downloaded_images/article_211_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:29.336465",
  },
  {
    id: 727,
    article_id: 211,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/cOxK4HKIqjagtVlb1oyly1ncj9CUb2rThQ.png",
    local_path: "downloaded_images/article_211_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:30.033547",
  },
  {
    id: 728,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-2-1-1024x386.png",
    local_path: "downloaded_images/article_212_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:37.795039",
  },
  {
    id: 729,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-3-1024x345.png",
    local_path: "downloaded_images/article_212_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:37.972726",
  },
  {
    id: 730,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-4-1-1024x243.png",
    local_path: "downloaded_images/article_212_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:38.15379",
  },
  {
    id: 731,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-5-1024x501.png",
    local_path: "downloaded_images/article_212_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:38.328013",
  },
  {
    id: 732,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-6-1-1024x389.png",
    local_path: "downloaded_images/article_212_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:38.506832",
  },
  {
    id: 733,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-7-1-1024x249.png",
    local_path: "downloaded_images/article_212_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:38.68437",
  },
  {
    id: 734,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup8-1024x378.png",
    local_path: "downloaded_images/article_212_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:38.859248",
  },
  {
    id: 735,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-9-1024x252.png",
    local_path: "downloaded_images/article_212_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:39.035103",
  },
  {
    id: 736,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-10-1024x209.png",
    local_path: "downloaded_images/article_212_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:39.210067",
  },
  {
    id: 737,
    article_id: 212,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/organization-setup-11.png",
    local_path: "downloaded_images/article_212_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:39.5587",
  },
  {
    id: 738,
    article_id: 213,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-new-user-1-1024x757.png",
    local_path: "downloaded_images/article_213_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:47.624685",
  },
  {
    id: 739,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-2.png",
    local_path: "downloaded_images/article_214_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:55.318644",
  },
  {
    id: 740,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-3.png",
    local_path: "downloaded_images/article_214_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:55.498785",
  },
  {
    id: 741,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-4.png",
    local_path: "downloaded_images/article_214_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:55.675753",
  },
  {
    id: 742,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-5.png",
    local_path: "downloaded_images/article_214_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:55.856552",
  },
  {
    id: 743,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-6.png",
    local_path: "downloaded_images/article_214_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:56.03585",
  },
  {
    id: 744,
    article_id: 214,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/managing-users-7.png",
    local_path: "downloaded_images/article_214_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:46:56.214168",
  },
  {
    id: 745,
    article_id: 215,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-restoring-trash-1.png",
    local_path: "downloaded_images/article_215_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:05.340764",
  },
  {
    id: 746,
    article_id: 215,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-restoring-trash-2-1024x399.png",
    local_path: "downloaded_images/article_215_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:05.519551",
  },
  {
    id: 747,
    article_id: 215,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-restoring-trash-3.png",
    local_path: "downloaded_images/article_215_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:05.869371",
  },
  {
    id: 748,
    article_id: 215,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Custom-Side.png",
    local_path: "downloaded_images/article_215_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:06.051333",
  },
  {
    id: 749,
    article_id: 216,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/vBnG-Nk6x6EUs47EbwMKJUsgl46MLj7EEA.png",
    local_path: "downloaded_images/article_216_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:21.044837",
  },
  {
    id: 750,
    article_id: 216,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-layer-1-1024x513.png",
    local_path: "downloaded_images/article_216_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:21.231342",
  },
  {
    id: 751,
    article_id: 216,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-layer-2-1024x513.png",
    local_path: "downloaded_images/article_216_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:21.41418",
  },
  {
    id: 752,
    article_id: 216,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-layer-3-1024x514.png",
    local_path: "downloaded_images/article_216_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:21.595254",
  },
  {
    id: 753,
    article_id: 216,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-layer-4-1024x513.png",
    local_path: "downloaded_images/article_216_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:21.78276",
  },
  {
    id: 754,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Tc5vElBuL-xGZw0gScWv-2SkdZZ3ICeO4A.png",
    local_path: "downloaded_images/article_217_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:32.059498",
  },
  {
    id: 755,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/e2S-qSmdOFMzBLGdHJyfdUzOvo4CTR5vzQ.png",
    local_path: "downloaded_images/article_217_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:32.423641",
  },
  {
    id: 756,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oUIH9ZZENhf4zdcszDfjFLiUoFv9TEcQGg.png",
    local_path: "downloaded_images/article_217_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:32.618325",
  },
  {
    id: 757,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/4bCdDogRqMOoiMMhOC4E4iyrvIb7kakJfg.png",
    local_path: "downloaded_images/article_217_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:32.807479",
  },
  {
    id: 758,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-tiles-1-1024x319.png",
    local_path: "downloaded_images/article_217_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:32.982751",
  },
  {
    id: 759,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-tiles-2-1024x311.png",
    local_path: "downloaded_images/article_217_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:33.162544",
  },
  {
    id: 760,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-tiles-3-1024x346.png",
    local_path: "downloaded_images/article_217_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:33.356481",
  },
  {
    id: 761,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-tiles-4-1024x555.png",
    local_path: "downloaded_images/article_217_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:33.540915",
  },
  {
    id: 762,
    article_id: 217,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mapping-custom-tiles-5-1024x512.png",
    local_path: "downloaded_images/article_217_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:33.720957",
  },
  {
    id: 763,
    article_id: 218,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/app-settings-1-977x1024.png",
    local_path: "downloaded_images/article_218_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:41.588879",
  },
  {
    id: 764,
    article_id: 218,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/app-settings-2-760x1024.png",
    local_path: "downloaded_images/article_218_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:41.764143",
  },
  {
    id: 765,
    article_id: 219,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/zyTCv1Wex0w3_eZOxxqwdkorqWyPyiQ_rA.png",
    local_path: "downloaded_images/article_219_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:54.675463",
  },
  {
    id: 766,
    article_id: 219,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multi-language-support-1-1024x436.png",
    local_path: "downloaded_images/article_219_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:54.857986",
  },
  {
    id: 767,
    article_id: 219,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multi-language-support-2-1024x296.png",
    local_path: "downloaded_images/article_219_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:55.034203",
  },
  {
    id: 768,
    article_id: 219,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/multi-language-support-3-1024x500.png",
    local_path: "downloaded_images/article_219_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:55.217514",
  },
  {
    id: 769,
    article_id: 219,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ovfkCA_hkvjetcJiC_UHzr2VqRZOx1d3g.png",
    local_path: "downloaded_images/article_219_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:47:55.407245",
  },
  {
    id: 770,
    article_id: 222,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/add-multiple-language-1-2-1024x278.png",
    local_path: "downloaded_images/article_222_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:18.876121",
  },
  {
    id: 771,
    article_id: 222,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/add-multiple-language-2-1-1024x265.png",
    local_path: "downloaded_images/article_222_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:19.053328",
  },
  {
    id: 772,
    article_id: 222,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/add-multiple-language-3-1-1024x372.png",
    local_path: "downloaded_images/article_222_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:19.405644",
  },
  {
    id: 773,
    article_id: 222,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/add-multiple-language-4.png",
    local_path: "downloaded_images/article_222_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:19.588868",
  },
  {
    id: 774,
    article_id: 223,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/branding-centre-1-1024x458.png",
    local_path: "downloaded_images/article_223_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:27.155896",
  },
  {
    id: 775,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-1-1024x473.png",
    local_path: "downloaded_images/article_224_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:36.417507",
  },
  {
    id: 776,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-2.png",
    local_path: "downloaded_images/article_224_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:36.594109",
  },
  {
    id: 777,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-3.png",
    local_path: "downloaded_images/article_224_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:36.773657",
  },
  {
    id: 778,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-flat-theme.png",
    local_path: "downloaded_images/article_224_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:36.954774",
  },
  {
    id: 779,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-classic-theme.png",
    local_path: "downloaded_images/article_224_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:37.134219",
  },
  {
    id: 780,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-screenshot.png",
    local_path: "downloaded_images/article_224_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:37.3173",
  },
  {
    id: 781,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-screenshot-2.png",
    local_path: "downloaded_images/article_224_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:37.494518",
  },
  {
    id: 782,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-icon.png",
    local_path: "downloaded_images/article_224_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:37.670285",
  },
  {
    id: 783,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-splash.png",
    local_path: "downloaded_images/article_224_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:37.84877",
  },
  {
    id: 784,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-splash-landscape.png",
    local_path: "downloaded_images/article_224_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:38.027021",
  },
  {
    id: 785,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-loginlogo.png",
    local_path: "downloaded_images/article_224_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:38.208378",
  },
  {
    id: 786,
    article_id: 224,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/intro-to-aaas-navtitlelogo.png",
    local_path: "downloaded_images/article_224_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:38.386504",
  },
  {
    id: 787,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-1.png",
    local_path: "downloaded_images/article_225_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:47.543975",
  },
  {
    id: 788,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-2-1024x524.png",
    local_path: "downloaded_images/article_225_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:47.720851",
  },
  {
    id: 789,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-3-1024x542.png",
    local_path: "downloaded_images/article_225_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:47.898313",
  },
  {
    id: 790,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-4-1024x521.png",
    local_path: "downloaded_images/article_225_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.078382",
  },
  {
    id: 791,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-5-1024x456.png",
    local_path: "downloaded_images/article_225_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.257001",
  },
  {
    id: 792,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-6.png",
    local_path: "downloaded_images/article_225_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.439646",
  },
  {
    id: 793,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-7.png",
    local_path: "downloaded_images/article_225_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.619709",
  },
  {
    id: 794,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-8.png",
    local_path: "downloaded_images/article_225_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.797038",
  },
  {
    id: 795,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-9.png",
    local_path: "downloaded_images/article_225_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:48.981887",
  },
  {
    id: 796,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-10.png",
    local_path: "downloaded_images/article_225_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:49.167889",
  },
  {
    id: 797,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-11.png",
    local_path: "downloaded_images/article_225_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:49.529143",
  },
  {
    id: 798,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-12.png",
    local_path: "downloaded_images/article_225_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:49.70738",
  },
  {
    id: 799,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-13.png",
    local_path: "downloaded_images/article_225_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:49.884299",
  },
  {
    id: 800,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-14.png",
    local_path: "downloaded_images/article_225_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:50.062462",
  },
  {
    id: 801,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-15.png",
    local_path: "downloaded_images/article_225_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:50.239389",
  },
  {
    id: 802,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-16-1024x397.png",
    local_path: "downloaded_images/article_225_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:50.419864",
  },
  {
    id: 803,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-17.png",
    local_path: "downloaded_images/article_225_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:50.602504",
  },
  {
    id: 804,
    article_id: 225,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/verifying-your-play-console-18.png",
    local_path: "downloaded_images/article_225_img_17.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:48:50.789546",
  },
  {
    id: 805,
    article_id: 226,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/linking-play-store-1.png",
    local_path: "downloaded_images/article_226_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:00.771878",
  },
  {
    id: 806,
    article_id: 226,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/linking-play-store-2.png",
    local_path: "downloaded_images/article_226_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:00.947788",
  },
  {
    id: 807,
    article_id: 226,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/linking-play-store-3-1024x206.png",
    local_path: "downloaded_images/article_226_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:01.128021",
  },
  {
    id: 808,
    article_id: 226,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/linking-play-store-4.png",
    local_path: "downloaded_images/article_226_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:01.842345",
  },
  {
    id: 809,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/lnwNns74qtTZ7HqC-AwN3ARmS2XDlvSKtQ.png",
    local_path: "downloaded_images/article_228_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:22.777948",
  },
  {
    id: 810,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/WkhDl2rGgVprDdbjvnwuC8vWxm_U00eDiQ.png",
    local_path: "downloaded_images/article_228_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:23.123396",
  },
  {
    id: 811,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ZiGosKEGRtwvzK3BPK24XHOTgmY4wuyEeA.png",
    local_path: "downloaded_images/article_228_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:23.310181",
  },
  {
    id: 812,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/90EdX0sq3zUtYbKgR_LRRsF6FiuiTJ3fYw.png",
    local_path: "downloaded_images/article_228_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:23.492659",
  },
  {
    id: 813,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/VgzhiwFPWU7l7U_BeduoQQ8sasW5J2vfQw.png",
    local_path: "downloaded_images/article_228_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:24.198315",
  },
  {
    id: 814,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/cR_dt5pq8sXVDXlABeo1ozkn-NIdxwyQQQ.png",
    local_path: "downloaded_images/article_228_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:24.373865",
  },
  {
    id: 815,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/oMXoUfnqeD_d-6tegV9zKjx0rj2LXpKpWA.png",
    local_path: "downloaded_images/article_228_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:24.552527",
  },
  {
    id: 816,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/wi5rzGGyi-NPdqWlNHvsgiXXlhgQAQVWMQ.png",
    local_path: "downloaded_images/article_228_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:24.729189",
  },
  {
    id: 817,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5G2rbJIULIuelYG605nvjYipCvqe_ZbniA.png",
    local_path: "downloaded_images/article_228_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:24.912076",
  },
  {
    id: 818,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hV3RVvcGcnT1p7xh_GX_MqCXMKQEKPpATA.png",
    local_path: "downloaded_images/article_228_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:25.092062",
  },
  {
    id: 819,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nWcL4L8MbdYFkAZ3EY-qDqmLGqhDS75MeQ.png",
    local_path: "downloaded_images/article_228_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:25.280443",
  },
  {
    id: 820,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Aeir0WfaRAjpOcVZeumLV3DGuNU0XqJglQ.png",
    local_path: "downloaded_images/article_228_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:25.459119",
  },
  {
    id: 821,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/jGBwmK6fQ10EQRu330CZHSFU9kjvlqREXQ.png",
    local_path: "downloaded_images/article_228_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:25.637957",
  },
  {
    id: 822,
    article_id: 228,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tzIxpfz6oaoA36qjqFQrq-9bf-LQfIQBvA.png",
    local_path: "downloaded_images/article_228_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:25.812191",
  },
  {
    id: 823,
    article_id: 229,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/google-developer-account.png",
    local_path: "downloaded_images/article_229_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:34.090255",
  },
  {
    id: 824,
    article_id: 230,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/example_image.png",
    local_path: "downloaded_images/article_230_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:42.6421",
  },
  {
    id: 825,
    article_id: 230,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/example_image.png",
    local_path: "downloaded_images/article_230_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:42.818055",
  },
  {
    id: 826,
    article_id: 231,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hZ1_6oeTKZBWWv3t6LqEhi3006Kts7-prg.png",
    local_path: "downloaded_images/article_231_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:50.933761",
  },
  {
    id: 827,
    article_id: 232,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-trial-apps-1.png",
    local_path: "downloaded_images/article_232_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:59.420266",
  },
  {
    id: 828,
    article_id: 232,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-trial-apps-2.png",
    local_path: "downloaded_images/article_232_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:49:59.77831",
  },
  {
    id: 829,
    article_id: 235,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/dOZtO_EQqnk5NIzZgqQTHSrqKOSMHiARZA.png",
    local_path: "downloaded_images/article_235_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:21.799119",
  },
  {
    id: 830,
    article_id: 235,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/byOSq8nt-w4NaxOy35kBn29_yqnN-LUi0A.png",
    local_path: "downloaded_images/article_235_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:21.975612",
  },
  {
    id: 831,
    article_id: 235,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/87zBe9iByfFGQKq3cwtrrIJ137Rgn801Og.png",
    local_path: "downloaded_images/article_235_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:22.324088",
  },
  {
    id: 832,
    article_id: 235,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JVT7KWbRlinXxbxS_hlvzqEKCOXiCZTx7Q.png",
    local_path: "downloaded_images/article_235_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:22.505553",
  },
  {
    id: 833,
    article_id: 236,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/app-store-distribution-1.jpg",
    local_path: "downloaded_images/article_236_img_0.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:30.281169",
  },
  {
    id: 834,
    article_id: 236,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/app-store-distribution-2.jpg",
    local_path: "downloaded_images/article_236_img_1.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:30.456204",
  },
  {
    id: 835,
    article_id: 237,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-our-app-manager-1-1024x341.png",
    local_path: "downloaded_images/article_237_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:39.058468",
  },
  {
    id: 836,
    article_id: 237,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-our-app-manager-2.png",
    local_path: "downloaded_images/article_237_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:39.41552",
  },
  {
    id: 837,
    article_id: 237,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/adding-our-app-manager-3.png",
    local_path: "downloaded_images/article_237_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:50:39.601593",
  },
  {
    id: 838,
    article_id: 240,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Mm9wQ60YpPSeymrGpcMSEciRTawOEoCNlg.png",
    local_path: "downloaded_images/article_240_img_0.png",
    alt_text: "Purchase_Codes.png",
    downloaded_at: "2025-10-21T17:51:03.148394",
  },
  {
    id: 839,
    article_id: 240,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/YOXFEqbR3OBwXoUHps5GvyHv3CNfcyYr5g.png",
    local_path: "downloaded_images/article_240_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:03.332902",
  },
  {
    id: 840,
    article_id: 240,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/OalTRsQSvN-Ojli7kfr1k3wv54xp4koEoQ.png",
    local_path: "downloaded_images/article_240_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:03.858457",
  },
  {
    id: 841,
    article_id: 240,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qIWg6x2lpYIJsz1t9BrNrnIP7B_bdP-g_g.png",
    local_path: "downloaded_images/article_240_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:05.764708",
  },
  {
    id: 842,
    article_id: 241,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-business-manager-app-install-1-e1756134513883-1024x635.png",
    local_path: "downloaded_images/article_241_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:14.066733",
  },
  {
    id: 843,
    article_id: 241,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-business-manager-app-install-2-2.png",
    local_path: "downloaded_images/article_241_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:14.423724",
  },
  {
    id: 844,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-1.png",
    local_path: "downloaded_images/article_243_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:28.664977",
  },
  {
    id: 845,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-2.png",
    local_path: "downloaded_images/article_243_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:28.837492",
  },
  {
    id: 846,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-3.png",
    local_path: "downloaded_images/article_243_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:29.188433",
  },
  {
    id: 847,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-4.png",
    local_path: "downloaded_images/article_243_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:29.367513",
  },
  {
    id: 848,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-5.png",
    local_path: "downloaded_images/article_243_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:29.544392",
  },
  {
    id: 849,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-6.png",
    local_path: "downloaded_images/article_243_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:29.72094",
  },
  {
    id: 850,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-7.png",
    local_path: "downloaded_images/article_243_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:29.901438",
  },
  {
    id: 851,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-8.png",
    local_path: "downloaded_images/article_243_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:30.077729",
  },
  {
    id: 852,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-9.png",
    local_path: "downloaded_images/article_243_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:30.254841",
  },
  {
    id: 853,
    article_id: 243,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/apple-enterprise-program-10.png",
    local_path: "downloaded_images/article_243_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:30.791789",
  },
  {
    id: 854,
    article_id: 245,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/api-key-setup-1-2-1024x305.png",
    local_path: "downloaded_images/article_245_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:45.748056",
  },
  {
    id: 855,
    article_id: 245,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/api-key-setup-2-1024x592.png",
    local_path: "downloaded_images/article_245_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:45.925547",
  },
  {
    id: 856,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-1-1024x313.png",
    local_path: "downloaded_images/article_246_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:54.178452",
  },
  {
    id: 857,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-2-1024x403.png",
    local_path: "downloaded_images/article_246_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:54.36166",
  },
  {
    id: 858,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-3-1024x297.png",
    local_path: "downloaded_images/article_246_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:54.540171",
  },
  {
    id: 859,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-4-1024x327.png",
    local_path: "downloaded_images/article_246_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:54.724292",
  },
  {
    id: 860,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-5-1024x271.png",
    local_path: "downloaded_images/article_246_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:54.903618",
  },
  {
    id: 861,
    article_id: 246,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ios-push-notification-6.png",
    local_path: "downloaded_images/article_246_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:51:55.081841",
  },
  {
    id: 862,
    article_id: 247,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/SPea5ra83AcgkHAiZwVAnJxi3VsObhVp_Q.png",
    local_path: "downloaded_images/article_247_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:04.227983",
  },
  {
    id: 863,
    article_id: 247,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/aaas-publishing-requirements-1-1.png",
    local_path: "downloaded_images/article_247_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:04.403655",
  },
  {
    id: 864,
    article_id: 248,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-41.png",
    local_path: "downloaded_images/article_248_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:12.167391",
  },
  {
    id: 865,
    article_id: 248,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-42.png",
    local_path: "downloaded_images/article_248_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:12.347394",
  },
  {
    id: 866,
    article_id: 248,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-43.png",
    local_path: "downloaded_images/article_248_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:12.529808",
  },
  {
    id: 867,
    article_id: 248,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-45.png",
    local_path: "downloaded_images/article_248_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:12.720012",
  },
  {
    id: 868,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-101.png",
    local_path: "downloaded_images/article_251_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:35.715872",
  },
  {
    id: 869,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-102.png",
    local_path: "downloaded_images/article_251_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:35.893914",
  },
  {
    id: 870,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-103-1024x201.png",
    local_path: "downloaded_images/article_251_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:36.069717",
  },
  {
    id: 871,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/W3TE-kKxik_5LGYsqHuNVRM-drGQIu2mlg.png",
    local_path: "downloaded_images/article_251_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:36.427107",
  },
  {
    id: 872,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-104.png",
    local_path: "downloaded_images/article_251_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:36.606816",
  },
  {
    id: 873,
    article_id: 251,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-105.png",
    local_path: "downloaded_images/article_251_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:36.782673",
  },
  {
    id: 874,
    article_id: 253,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JCQE3YZFtwV2DywuL3WPHIudjfj4VQ14Zg.png",
    local_path: "downloaded_images/article_253_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:51.724767",
  },
  {
    id: 875,
    article_id: 253,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/MMEX3DSA74t7WydOMYB6n5jiZ0jinfmNEQ.png",
    local_path: "downloaded_images/article_253_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:52:52.075084",
  },
  {
    id: 876,
    article_id: 254,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/MHUpmKxfImGRnkVq5vMvN2H6lEDDu4VOug.png",
    local_path: "downloaded_images/article_254_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:02.197406",
  },
  {
    id: 877,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/configure-email-support-1-1.png",
    local_path: "downloaded_images/article_255_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:11.929024",
  },
  {
    id: 878,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/configure-email-support-2.png",
    local_path: "downloaded_images/article_255_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:12.110711",
  },
  {
    id: 879,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/configure-email-support-3.png",
    local_path: "downloaded_images/article_255_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:12.645274",
  },
  {
    id: 880,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sendgrid-email-service-1-1024x175.png",
    local_path: "downloaded_images/article_255_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:12.827379",
  },
  {
    id: 881,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/configure-email-support-5.png",
    local_path: "downloaded_images/article_255_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:13.005163",
  },
  {
    id: 882,
    article_id: 255,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/configure-email-support-6.png",
    local_path: "downloaded_images/article_255_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:13.352519",
  },
  {
    id: 883,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/use-own-sendgrid-2-1024x991.png",
    local_path: "downloaded_images/article_256_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:24.85418",
  },
  {
    id: 884,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/r_iffsADW7zaKM0N6wppW91ekC-TjIhe7A.png",
    local_path: "downloaded_images/article_256_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:25.201966",
  },
  {
    id: 885,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/g2k5BZlZLlhUDvHYASLnvBe20qGNb0jJrQ.png",
    local_path: "downloaded_images/article_256_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:25.383067",
  },
  {
    id: 886,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/KmBMaeyUrAfz6pufYQ-JIGLfDv7r-xANVw.png",
    local_path: "downloaded_images/article_256_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:25.572453",
  },
  {
    id: 887,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/use-own-sendgrid-1.png",
    local_path: "downloaded_images/article_256_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:25.751727",
  },
  {
    id: 888,
    article_id: 256,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rRujHzd7Oag-ya5J_1_eUfQ3KCJGwK0_Tw.png",
    local_path: "downloaded_images/article_256_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:26.10019",
  },
  {
    id: 889,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/UnV30AalGh_5DyCHWJF1sSXGXLcmJMyQzA.png",
    local_path: "downloaded_images/article_257_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:36.619737",
  },
  {
    id: 890,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ycfd-Azdk1M7XOfTBRbeKWwfFqwpHIX7Jw.png",
    local_path: "downloaded_images/article_257_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:36.793177",
  },
  {
    id: 891,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/jM5BkRbGNWDnOKXFXfH2JC9JgFW-Z7CFVQ.png",
    local_path: "downloaded_images/article_257_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:36.968433",
  },
  {
    id: 892,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/raKh4MNtAiep5MVrbevDc0PROkt9iGsnNA.png",
    local_path: "downloaded_images/article_257_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:37.145778",
  },
  {
    id: 893,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I2FGgw4LujWOPIQqNpedx1oN43cacN-2Mw.png",
    local_path: "downloaded_images/article_257_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:37.323339",
  },
  {
    id: 894,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5YsGx0R-glqPykPxksq6dujJqXgwNDVN3w.png",
    local_path: "downloaded_images/article_257_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:37.499671",
  },
  {
    id: 895,
    article_id: 257,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/50JhogFS2-6Bm1-uwxQhvpiu-unOie7FZg.png",
    local_path: "downloaded_images/article_257_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:37.854523",
  },
  {
    id: 896,
    article_id: 258,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/MUAt2_mxdYZmgd18W1p34NAT4LStkEyh8A.png",
    local_path: "downloaded_images/article_258_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:53:45.444297",
  },
  {
    id: 897,
    article_id: 261,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ogArzEcoyUZ5tX73y7Ke5M7piO-aP6Ah6Q.png",
    local_path: "downloaded_images/article_261_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:06.457524",
  },
  {
    id: 898,
    article_id: 261,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/idAwgXv-vmDAOjYslXQDmtzboX49TXLpQ.png",
    local_path: "downloaded_images/article_261_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:06.809664",
  },
  {
    id: 899,
    article_id: 261,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/3dpwf2lLgJVl6MxY79d502UHUevP_yx-Hw.png",
    local_path: "downloaded_images/article_261_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:06.987895",
  },
  {
    id: 900,
    article_id: 262,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/s4zkfCnyO_bav5rC-vgaZZ9f1jo4CBBV8A.png",
    local_path: "downloaded_images/article_262_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:18.099769",
  },
  {
    id: 901,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/n-JwsAGSylcAg-7E2sBPd1Ycz1BrFEORNQ.png",
    local_path: "downloaded_images/article_263_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:30.955656",
  },
  {
    id: 902,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5T3E5si1EOr7r21CDP5ghanDrydtit8yqQ.png",
    local_path: "downloaded_images/article_263_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:31.139953",
  },
  {
    id: 903,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/OErVvxwRseg8l2QZHKcDnsxrHA155mCsrQ.png",
    local_path: "downloaded_images/article_263_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:31.489092",
  },
  {
    id: 904,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/uYhqvajXiH1ZZoFG_LpsUrRYAUchXOwhvw.png",
    local_path: "downloaded_images/article_263_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:31.838863",
  },
  {
    id: 905,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1KpWgfnGop0IH39IzFPna5SGZ-VX4B0fSQ.png",
    local_path: "downloaded_images/article_263_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.021192",
  },
  {
    id: 906,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/lLu0is3Bms67cIt2NxMdFREx5VfcMf14Yw.png",
    local_path: "downloaded_images/article_263_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.19952",
  },
  {
    id: 907,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bZO834f2AWQwOFpr9v42q7bmU8PRCOj40A.png",
    local_path: "downloaded_images/article_263_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.378522",
  },
  {
    id: 908,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fqBvregDcxpDJAPg5Xo9f9Vk0fggE9YxeQ.png",
    local_path: "downloaded_images/article_263_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.55579",
  },
  {
    id: 909,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LbNPj_KBqnxr8b7s17rJR6I4vhltl7sZDg.png",
    local_path: "downloaded_images/article_263_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.733344",
  },
  {
    id: 910,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ZCTMXr7PYTxiQudxQm_qCuBSL7B614Er7Q.png",
    local_path: "downloaded_images/article_263_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:32.912894",
  },
  {
    id: 911,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/stfloCvomjFj2mcV4uZ0ymPmdh5INz62Eg.png",
    local_path: "downloaded_images/article_263_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:33.094226",
  },
  {
    id: 912,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/AGuE3VMuYoZWIUeLU5qcWmP57kIiAf1Plg.png",
    local_path: "downloaded_images/article_263_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:33.278129",
  },
  {
    id: 913,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/9YmUYUOArRuLm1C17tpp0zxNRZSV5J4sFA.png",
    local_path: "downloaded_images/article_263_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:33.457768",
  },
  {
    id: 914,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/UP2uCiTlobHAPcAo8DfRw2nKaG3Go5tpmA.png",
    local_path: "downloaded_images/article_263_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:33.639151",
  },
  {
    id: 915,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mb1zT_Tg4sfp_EUmh8aHpT2yiFuRj3f9ag.png",
    local_path: "downloaded_images/article_263_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:34.68248",
  },
  {
    id: 916,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/aN-qS25PBHye3XtqY5L1mDXmSQxIA7HXMQ.png",
    local_path: "downloaded_images/article_263_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:34.85813",
  },
  {
    id: 917,
    article_id: 263,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/r1uLhHhl0Wv_4IYUpA45Y9qRgTMME1s8WQ.png",
    local_path: "downloaded_images/article_263_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:35.03626",
  },
  {
    id: 918,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-1-1-1024x676.png",
    local_path: "downloaded_images/article_264_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:45.313804",
  },
  {
    id: 919,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-1-2.png",
    local_path: "downloaded_images/article_264_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:45.507305",
  },
  {
    id: 920,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-2.png",
    local_path: "downloaded_images/article_264_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:45.695869",
  },
  {
    id: 921,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-3.png",
    local_path: "downloaded_images/article_264_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:45.872106",
  },
  {
    id: 922,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-4-827x1024.png",
    local_path: "downloaded_images/article_264_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:46.049246",
  },
  {
    id: 923,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-5-1024x509.png",
    local_path: "downloaded_images/article_264_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:46.227564",
  },
  {
    id: 924,
    article_id: 264,
    original_url:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_I8CY0QbeY3svSB48ok7QE-wk6izKqnjA8J_XpLVITeszaJ966jFbWFayfGxitYqMsOHgmFC0T35kKaT5kK-W2QpXNoQ8VWtT_dMyNuD2s4rc02XvRV_1hFL1-OATCZghgDeytQ?key=zm6sdpW-PyPc_r3OJs6qoDfT",
    local_path: "downloaded_images/article_264_img_6.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:46.990791",
  },
  {
    id: 925,
    article_id: 264,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/casa-certificate-process-6-1024x365.png",
    local_path: "downloaded_images/article_264_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:47.200948",
  },
  {
    id: 926,
    article_id: 265,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tgPYD_v6LlG6exLW1W_Kf8VrgtD8nY8zIA.png",
    local_path: "downloaded_images/article_265_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:57.472789",
  },
  {
    id: 927,
    article_id: 265,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rTnmo1hWFlkiV2LFf0bSn44FHm71TU4VpQ.png",
    local_path: "downloaded_images/article_265_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:57.731695",
  },
  {
    id: 928,
    article_id: 265,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/AZ7dg00vHbnVD4jfgz3W3fUyrqgZWbF05A.png",
    local_path: "downloaded_images/article_265_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:58.074692",
  },
  {
    id: 929,
    article_id: 265,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/1JYBpeEQ2bdZ78b-Pj_5SXvqwpGT70A4w.png",
    local_path: "downloaded_images/article_265_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:58.252505",
  },
  {
    id: 930,
    article_id: 265,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/9Z_UvykqEwGSkK14kWRNE2amo1O4IG7yww.png",
    local_path: "downloaded_images/article_265_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:54:58.430439",
  },
  {
    id: 931,
    article_id: 266,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/enabling-google-picker-1-1024x386.png",
    local_path: "downloaded_images/article_266_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:07.756343",
  },
  {
    id: 932,
    article_id: 266,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/enabling-google-picker-2-1024x566.png",
    local_path: "downloaded_images/article_266_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:07.931266",
  },
  {
    id: 933,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nU49IFR600B6f_BVi192Qrw9OjRNLMeeKQ.png",
    local_path: "downloaded_images/article_267_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:22.618349",
  },
  {
    id: 934,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/8F5Awpl2XwH9GZ0rLwiIDgowH4C_RgtoVw.png",
    local_path: "downloaded_images/article_267_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:22.802901",
  },
  {
    id: 935,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/S0Uxa6lxYSM-DQATk5Gsk1Fu0Ak9y7rhnQ.png",
    local_path: "downloaded_images/article_267_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:22.984436",
  },
  {
    id: 936,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/enabling-box-connections-1-1024x347.png",
    local_path: "downloaded_images/article_267_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:23.161996",
  },
  {
    id: 937,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hoS5ZuC0PcXEfHksxpVH7UsLOqsh024Fcg.png",
    local_path: "downloaded_images/article_267_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:23.867023",
  },
  {
    id: 938,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NPFtVWH_FNUoaVV6ZYqsJ3j_DXpabLtS1w.png",
    local_path: "downloaded_images/article_267_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:24.044161",
  },
  {
    id: 939,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/smb_ew0lDMa3rriJ9X9_74ubi2erUr-dYw.png",
    local_path: "downloaded_images/article_267_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:24.225597",
  },
  {
    id: 940,
    article_id: 267,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/zL0i5dwOWurS-_jl4GGbyMyJCpB4LdnVWg.png",
    local_path: "downloaded_images/article_267_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:55:24.406681",
  },
  {
    id: 941,
    article_id: 274,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11127410416/original/IEVjybLq3RR5efzfyQmJkNlqgz7Y5rsy9g.png?1744291953",
    local_path: "downloaded_images/article_274_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:13.944636",
  },
  {
    id: 942,
    article_id: 275,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/wUSvhn34-WjdgPO9qO9Vg2FOsMHGV6jBwQ.png",
    local_path: "downloaded_images/article_275_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:22.903192",
  },
  {
    id: 943,
    article_id: 275,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/email-less-login-1.png",
    local_path: "downloaded_images/article_275_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:23.077501",
  },
  {
    id: 944,
    article_id: 275,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fXp31T35HN2UoypE7T5veb-4OT-mnt75IQ.png",
    local_path: "downloaded_images/article_275_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:23.251948",
  },
  {
    id: 945,
    article_id: 276,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sso-with-ping-1024x555.png",
    local_path: "downloaded_images/article_276_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:32.01982",
  },
  {
    id: 946,
    article_id: 276,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xIKx7sITf7kYwER1AWOB-5UliynYflP_gw.png",
    local_path: "downloaded_images/article_276_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:32.194177",
  },
  {
    id: 947,
    article_id: 276,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/GHv3k-We382rhRE63A6zD03dUqXLrFC_lQ.png",
    local_path: "downloaded_images/article_276_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:32.373083",
  },
  {
    id: 948,
    article_id: 276,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JxbJhx0qcUl79UKrMpq5NhnQg3x9ZUb-kA.png",
    local_path: "downloaded_images/article_276_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:32.546209",
  },
  {
    id: 949,
    article_id: 276,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5HMGEMLNZxruh7wzK_UZVuOqTUcivewpZw.png",
    local_path: "downloaded_images/article_276_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:32.725649",
  },
  {
    id: 950,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/provisioning-sso-azure-1024x474.png",
    local_path: "downloaded_images/article_277_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:52.844541",
  },
  {
    id: 951,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/provisioning-sso-azure-2-1024x544.png",
    local_path: "downloaded_images/article_277_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:53.019425",
  },
  {
    id: 952,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/entra-enterprise-apps-1.png",
    local_path: "downloaded_images/article_277_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:53.193222",
  },
  {
    id: 953,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/54gFdHOYBlKGkaYbnsTs4wi2905AvMevKA.jpg",
    local_path: "downloaded_images/article_277_img_3.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:53.543667",
  },
  {
    id: 954,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/o1V9s6FucxxfBfGcnwPHjKh5BXRjluiPUg.png",
    local_path: "downloaded_images/article_277_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:53.721766",
  },
  {
    id: 955,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NgmgtSFdAbetnjqD95cyCLemfBLkXDkyTw.jpg",
    local_path: "downloaded_images/article_277_img_5.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:53.914192",
  },
  {
    id: 956,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/D3UelpNXgx8x1C3UMShU0qQPTcsBUSPy0Q.png",
    local_path: "downloaded_images/article_277_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:54.095821",
  },
  {
    id: 957,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kqNrJ9feeYCHnwekUEyPeUVJA53t8lLgjg.png",
    local_path: "downloaded_images/article_277_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:54.284622",
  },
  {
    id: 958,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nIawHvwSzkWbnYdNWpqeDwXUVDvHKz4RFg.png",
    local_path: "downloaded_images/article_277_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:54.463923",
  },
  {
    id: 959,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/W2-Wpzf63rTi4x7JjSUUaafO62hWp-qlCg.png",
    local_path: "downloaded_images/article_277_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:54.645516",
  },
  {
    id: 960,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/zz0zMhuS2Ey8Zr-g5PIFQzhP2URcmrc-SQ.png",
    local_path: "downloaded_images/article_277_img_10.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:54.825056",
  },
  {
    id: 961,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/znvjf0uBX5uL6MwjdBYQ3srdaXFfAUpLFg.png",
    local_path: "downloaded_images/article_277_img_11.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:55.006943",
  },
  {
    id: 962,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/6mBIyhHddll4cuOmAkbpIrIc5-uL36qySw.png",
    local_path: "downloaded_images/article_277_img_12.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:55.18827",
  },
  {
    id: 963,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/eHOsxIBxYIiuXUicGhnS2Uz16ZkcNOrOPQ.png",
    local_path: "downloaded_images/article_277_img_13.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:55.537824",
  },
  {
    id: 964,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qNlBQXKz5Dn-ATI6YWK1He-xi9WnBIKdUw.png",
    local_path: "downloaded_images/article_277_img_14.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:55.719002",
  },
  {
    id: 965,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/DGspHxG3bYX-YKl1LwEdZm5VU7mry4jrxA.png",
    local_path: "downloaded_images/article_277_img_15.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:56.089264",
  },
  {
    id: 966,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/6-gyHD5a1omCqpTBgGJoWgHANutcP7rJyg.png",
    local_path: "downloaded_images/article_277_img_16.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:56.263906",
  },
  {
    id: 967,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ImOeUFUlypBEAJymmaRYxkk_57gia9md-w.png",
    local_path: "downloaded_images/article_277_img_17.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:56.444795",
  },
  {
    id: 968,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/WOA9UBCI1jCfG4ZCtyEWnWYMqO_lbIsFsg.png",
    local_path: "downloaded_images/article_277_img_18.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:56.624023",
  },
  {
    id: 969,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Rb35QxN2Ex6gyQ69Hb5NGzxVfVgdK4MLZw.png",
    local_path: "downloaded_images/article_277_img_19.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:56.817513",
  },
  {
    id: 970,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I_hJVmKuUfyu31ptknnGeBXCoya0uBWqgQ.png",
    local_path: "downloaded_images/article_277_img_20.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.001577",
  },
  {
    id: 971,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/PLH_F10Bug2UC1T3DTQjBhyTzxGVr9SvvQ.png",
    local_path: "downloaded_images/article_277_img_21.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.177417",
  },
  {
    id: 972,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/fVWiIC7TnD2NegtwJxzZ1vn53X7IyshWFA.png",
    local_path: "downloaded_images/article_277_img_22.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.372302",
  },
  {
    id: 973,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/j0wo3l3uOCnduMQulKYlWK8CBQTuZwsaUw.png",
    local_path: "downloaded_images/article_277_img_23.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.556602",
  },
  {
    id: 974,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/cr06DvMKpIWNFmZ_vsBWpTVOIZak6xd4xA.png",
    local_path: "downloaded_images/article_277_img_24.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.734527",
  },
  {
    id: 975,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/SYIoNAFTIHQ8A5yTUWWHC6MOXsxBMYMe0Q.png",
    local_path: "downloaded_images/article_277_img_25.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:57.915455",
  },
  {
    id: 976,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/M9Ed1-LajZ3eEkvu0FhI5PYK6sjtpxWijg.png",
    local_path: "downloaded_images/article_277_img_26.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.089624",
  },
  {
    id: 977,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/TyvUg7wq7HTHIrayk1l8gQf7YzQWw9OLMw.png",
    local_path: "downloaded_images/article_277_img_27.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.26979",
  },
  {
    id: 978,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/6_SpfzRlOrKXuhIz4FpfWx7tfD8VkAcyjw.png",
    local_path: "downloaded_images/article_277_img_28.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.447188",
  },
  {
    id: 979,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/provisioning-sso-azure-3.png",
    local_path: "downloaded_images/article_277_img_29.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.640307",
  },
  {
    id: 980,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I_hJVmKuUfyu31ptknnGeBXCoya0uBWqgQ.png",
    local_path: "downloaded_images/article_277_img_30.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.820021",
  },
  {
    id: 981,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/PLH_F10Bug2UC1T3DTQjBhyTzxGVr9SvvQ.png",
    local_path: "downloaded_images/article_277_img_31.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:58.997916",
  },
  {
    id: 982,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sLL5LhfmKbPbT2bR01XiNW-nNrHYi4P15g.png",
    local_path: "downloaded_images/article_277_img_32.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:59.174299",
  },
  {
    id: 983,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mxITDOftcuH3-zQGg9gXAtERp69u1MYwzw.png",
    local_path: "downloaded_images/article_277_img_33.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:59.356071",
  },
  {
    id: 984,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/P72igq5cGOeLvdy7FdDSII3hUNE4yksCCQ.png",
    local_path: "downloaded_images/article_277_img_34.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:59.528994",
  },
  {
    id: 985,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/YC5s7gmmyuLpEwTZHu6bZhpGuR-TS2uiEg.png",
    local_path: "downloaded_images/article_277_img_35.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:59.710127",
  },
  {
    id: 986,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/VmRNy-cLp991HPYSRqNc2Xp8eptZCYWgg.png",
    local_path: "downloaded_images/article_277_img_36.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:56:59.895597",
  },
  {
    id: 987,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I_hJVmKuUfyu31ptknnGeBXCoya0uBWqgQ.png",
    local_path: "downloaded_images/article_277_img_37.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.074736",
  },
  {
    id: 988,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/PLH_F10Bug2UC1T3DTQjBhyTzxGVr9SvvQ.png",
    local_path: "downloaded_images/article_277_img_38.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.24992",
  },
  {
    id: 989,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sLL5LhfmKbPbT2bR01XiNW-nNrHYi4P15g.png",
    local_path: "downloaded_images/article_277_img_39.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.42644",
  },
  {
    id: 990,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/7uxC9owdD9j0kn5jF5zgGwSMHJtkS_DEEg.png",
    local_path: "downloaded_images/article_277_img_40.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.609026",
  },
  {
    id: 991,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/P72igq5cGOeLvdy7FdDSII3hUNE4yksCCQ.png",
    local_path: "downloaded_images/article_277_img_41.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.783981",
  },
  {
    id: 992,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/G9fbyopPyUSTJnLAzW0vjF3CifH-5kGwqA.png",
    local_path: "downloaded_images/article_277_img_42.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:00.975304",
  },
  {
    id: 993,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/VmRNy-cLp991HPYSRqNc2Xp8eptZCYWgg.png",
    local_path: "downloaded_images/article_277_img_43.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:01.830624",
  },
  {
    id: 994,
    article_id: 277,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/LT3k3h3G3x2wiL7yXyaQjk576gUl6DtjkQ.png",
    local_path: "downloaded_images/article_277_img_44.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:02.01611",
  },
  {
    id: 995,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/provisioning-sso-okta-1-1024x669.png",
    local_path: "downloaded_images/article_278_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:10.157973",
  },
  {
    id: 996,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/8Y4O_XJh_O5uWGhyTaXqwdTT4o9SV7GbRw.png",
    local_path: "downloaded_images/article_278_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:10.501715",
  },
  {
    id: 997,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2ft7KLjTl6mX6c6A-fOI5YR9RZdqDBWq-Q.png",
    local_path: "downloaded_images/article_278_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:10.85365",
  },
  {
    id: 998,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/SmS572QHFag-darxTlo4r7sIqb3hhsujcQ.png",
    local_path: "downloaded_images/article_278_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.027256",
  },
  {
    id: 999,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/I5X8oRJS21thC92X88rTRPS53YarLgdGuw.png",
    local_path: "downloaded_images/article_278_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.207507",
  },
  {
    id: 1000,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/nHf52GrPsVAleeHmORqh-x1lbR8nyg4ftQ.png",
    local_path: "downloaded_images/article_278_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.387304",
  },
  {
    id: 1001,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/K2LpyoVWceupuSuZaPgXXDAuo6o2J5ANTg.png",
    local_path: "downloaded_images/article_278_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.561065",
  },
  {
    id: 1002,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/sGTVLVjTJ1_bIcGQEQ_WItHXhy8XyE4q1Q.png",
    local_path: "downloaded_images/article_278_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.736777",
  },
  {
    id: 1003,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/bc28u3xAjoxXo69Ss_yuLuzvIRWHiSci_Q.png",
    local_path: "downloaded_images/article_278_img_8.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:11.916517",
  },
  {
    id: 1004,
    article_id: 278,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/VN21BlYY4duXj2l0KHQ48G0Xl1wJ_fpgIw.png",
    local_path: "downloaded_images/article_278_img_9.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:12.095796",
  },
  {
    id: 1005,
    article_id: 279,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/EntToolKit-Structure-3.png",
    local_path: "downloaded_images/article_279_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:25.374992",
  },
  {
    id: 1006,
    article_id: 279,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/copying-content-1.png",
    local_path: "downloaded_images/article_279_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:25.551351",
  },
  {
    id: 1007,
    article_id: 279,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/copying-content-2.png",
    local_path: "downloaded_images/article_279_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:25.7264",
  },
  {
    id: 1008,
    article_id: 280,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-environments-1.png",
    local_path: "downloaded_images/article_280_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:33.583274",
  },
  {
    id: 1009,
    article_id: 280,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-environments-4.png",
    local_path: "downloaded_images/article_280_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:33.930327",
  },
  {
    id: 1010,
    article_id: 280,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-environments-3.png",
    local_path: "downloaded_images/article_280_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:34.286697",
  },
  {
    id: 1011,
    article_id: 280,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/deleting-environments-5.png",
    local_path: "downloaded_images/article_280_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:34.463898",
  },
  {
    id: 1012,
    article_id: 280,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-08-25-130458-1024x357.png",
    local_path: "downloaded_images/article_280_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:34.647033",
  },
  {
    id: 1013,
    article_id: 281,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-environments-1-1024x326.png",
    local_path: "downloaded_images/article_281_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:42.366419",
  },
  {
    id: 1014,
    article_id: 281,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-environments-2-1024x281.png",
    local_path: "downloaded_images/article_281_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:43.420964",
  },
  {
    id: 1015,
    article_id: 281,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/creating-environments-3.png",
    local_path: "downloaded_images/article_281_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:43.788585",
  },
  {
    id: 1016,
    article_id: 283,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-204.png",
    local_path: "downloaded_images/article_283_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:57.811945",
  },
  {
    id: 1017,
    article_id: 283,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-205.png",
    local_path: "downloaded_images/article_283_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:57.996714",
  },
  {
    id: 1018,
    article_id: 283,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-206.png",
    local_path: "downloaded_images/article_283_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:58.175126",
  },
  {
    id: 1019,
    article_id: 283,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ghI5VayEjIIOQ6IBtxNbDg5dkgCYZLjryw.png",
    local_path: "downloaded_images/article_283_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:57:59.444468",
  },
  {
    id: 1020,
    article_id: 284,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/eXxfFxEbhARFa3-3UKCbDj7n1GjCswLw5g.png",
    local_path: "downloaded_images/article_284_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:09.563191",
  },
  {
    id: 1021,
    article_id: 284,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/9cDgLfv9m6FnznttZohl4dKlg4rIKGqHmQ.png",
    local_path: "downloaded_images/article_284_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:09.746412",
  },
  {
    id: 1022,
    article_id: 284,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IGHs52JyFmkvbABUYBC0Es758ihGDXwvpA.png",
    local_path: "downloaded_images/article_284_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:09.962053",
  },
  {
    id: 1023,
    article_id: 284,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/web-forms.png",
    local_path: "downloaded_images/article_284_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:10.136101",
  },
  {
    id: 1024,
    article_id: 286,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5yLVPp1pcQyOcSY80Nm9SkiOlLE7WToaHA.png",
    local_path: "downloaded_images/article_286_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:28.075244",
  },
  {
    id: 1025,
    article_id: 286,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IMLYa25GoNOqsf7Z4N7EtylfuKBwE6iVIw.png",
    local_path: "downloaded_images/article_286_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:28.43069",
  },
  {
    id: 1026,
    article_id: 286,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/r_iffsADW7zaKM0N6wppW91ekC-TjIhe7A.png",
    local_path: "downloaded_images/article_286_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:28.612974",
  },
  {
    id: 1027,
    article_id: 286,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/g2k5BZlZLlhUDvHYASLnvBe20qGNb0jJrQ.png",
    local_path: "downloaded_images/article_286_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:28.793877",
  },
  {
    id: 1028,
    article_id: 286,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/KmBMaeyUrAfz6pufYQ-JIGLfDv7r-xANVw.png",
    local_path: "downloaded_images/article_286_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T17:58:28.98026",
  },
  {
    id: 1029,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Build-your-first-app-in-5-minutes-1024x576.png",
    local_path: "downloaded_images/article_308_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:11.330033",
  },
  {
    id: 1030,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Adding-Reference-Data-2-1024x576.png",
    local_path: "downloaded_images/article_308_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:11.504351",
  },
  {
    id: 1031,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Customising-Your-Output-2-1024x576.png",
    local_path: "downloaded_images/article_308_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:11.854457",
  },
  {
    id: 1032,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Adding-an-Email-Connector-1024x576.png",
    local_path: "downloaded_images/article_308_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:12.035755",
  },
  {
    id: 1033,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Making-it-your-Own-1024x576.png",
    local_path: "downloaded_images/article_308_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:12.219406",
  },
  {
    id: 1034,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Managing-your-Data-Entries-1024x576.png",
    local_path: "downloaded_images/article_308_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:13.782585",
  },
  {
    id: 1035,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Managing-Users-and-Teams-1024x576.png",
    local_path: "downloaded_images/article_308_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:13.963189",
  },
  {
    id: 1036,
    article_id: 308,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Task-Management-and-Dispatch-1024x576.png",
    local_path: "downloaded_images/article_308_img_7.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:01:14.14492",
  },
  {
    id: 1037,
    article_id: 327,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2025-06-17_14-48-33.png",
    local_path: "downloaded_images/article_327_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:03:38.704493",
  },
  {
    id: 1038,
    article_id: 327,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/orgsetup-integrations.png",
    local_path: "downloaded_images/article_327_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:03:39.271541",
  },
  {
    id: 1039,
    article_id: 327,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/2025-06-17_14-59-06.png",
    local_path: "downloaded_images/article_327_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:03:39.452322",
  },
  {
    id: 1040,
    article_id: 328,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tips-for-rest-integrations-1-1024x446.png",
    local_path: "downloaded_images/article_328_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:03:47.083786",
  },
  {
    id: 1041,
    article_id: 332,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-company-1024x41.png",
    local_path: "downloaded_images/article_332_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:04:14.456187",
  },
  {
    id: 1042,
    article_id: 333,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-company-1024x41.png",
    local_path: "downloaded_images/article_333_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:04:22.445044",
  },
  {
    id: 1043,
    article_id: 334,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-company-1024x41.png",
    local_path: "downloaded_images/article_334_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:04:30.216526",
  },
  {
    id: 1044,
    article_id: 336,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-data-source-1024x43.png",
    local_path: "downloaded_images/article_336_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:04:45.118675",
  },
  {
    id: 1045,
    article_id: 337,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-data-source-1024x43.png",
    local_path: "downloaded_images/article_337_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:04:52.688205",
  },
  {
    id: 1046,
    article_id: 338,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-environment-1024x44.png",
    local_path: "downloaded_images/article_338_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:00.014816",
  },
  {
    id: 1047,
    article_id: 339,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-environment-1024x44.png",
    local_path: "downloaded_images/article_339_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:08.037374",
  },
  {
    id: 1048,
    article_id: 340,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-environment-search-single-1024x41.png",
    local_path: "downloaded_images/article_340_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:16.306996",
  },
  {
    id: 1049,
    article_id: 341,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-environment-search-1024x29.png",
    local_path: "downloaded_images/article_341_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:23.862408",
  },
  {
    id: 1050,
    article_id: 342,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-folder.png",
    local_path: "downloaded_images/article_342_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:31.268918",
  },
  {
    id: 1051,
    article_id: 343,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-folder-1024x43.png",
    local_path: "downloaded_images/article_343_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:38.771678",
  },
  {
    id: 1052,
    article_id: 344,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-folder-1024x43.png",
    local_path: "downloaded_images/article_344_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:46.201082",
  },
  {
    id: 1053,
    article_id: 345,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-folder.png",
    local_path: "downloaded_images/article_345_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:05:53.364701",
  },
  {
    id: 1054,
    article_id: 346,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-folder-search.png",
    local_path: "downloaded_images/article_346_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:00.971586",
  },
  {
    id: 1055,
    article_id: 347,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-formentry.png",
    local_path: "downloaded_images/article_347_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:09.070027",
  },
  {
    id: 1056,
    article_id: 348,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/tKz3gKJHs3oV192ZXzfwEn85vyVfaYprsQ.png",
    local_path: "downloaded_images/article_348_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:16.267658",
  },
  {
    id: 1057,
    article_id: 349,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-formentry-file.png",
    local_path: "downloaded_images/article_349_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:23.433053",
  },
  {
    id: 1058,
    article_id: 350,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-formentry-search.png",
    local_path: "downloaded_images/article_350_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:30.8677",
  },
  {
    id: 1059,
    article_id: 351,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-push-1-1024x43.png",
    local_path: "downloaded_images/article_351_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:38.368903",
  },
  {
    id: 1060,
    article_id: 352,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JhI8hGFactwkBP2-Kdq-HxTIhpfjf3g4rw.png",
    local_path: "downloaded_images/article_352_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:45.447969",
  },
  {
    id: 1061,
    article_id: 353,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-repository-create-installations-1024x43.png",
    local_path: "downloaded_images/article_353_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:06:53.093281",
  },
  {
    id: 1062,
    article_id: 354,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-repository-remove-installations-1024x44.png",
    local_path: "downloaded_images/article_354_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:00.817872",
  },
  {
    id: 1063,
    article_id: 355,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-repository-1024x41.png",
    local_path: "downloaded_images/article_355_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:09.033435",
  },
  {
    id: 1064,
    article_id: 356,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-repository-1024x45.png",
    local_path: "downloaded_images/article_356_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:16.629049",
  },
  {
    id: 1065,
    article_id: 357,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-repository-search-installations.png",
    local_path: "downloaded_images/article_357_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:24.240124",
  },
  {
    id: 1066,
    article_id: 358,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/KNs2ZnEjh6qOcYHPwtgPtPF0k_FL0Q0oNQ.png",
    local_path: "downloaded_images/article_358_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:31.339749",
  },
  {
    id: 1067,
    article_id: 359,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-map-search-1024x32.png",
    local_path: "downloaded_images/article_359_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:39.80603",
  },
  {
    id: 1068,
    article_id: 360,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-listing-search-1024x31.png",
    local_path: "downloaded_images/article_360_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:47.467279",
  },
  {
    id: 1069,
    article_id: 361,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-details-search-1024x32.png",
    local_path: "downloaded_images/article_361_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:07:55.120276",
  },
  {
    id: 1070,
    article_id: 362,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-iconboard-search-1024x32.png",
    local_path: "downloaded_images/article_362_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:02.705386",
  },
  {
    id: 1071,
    article_id: 363,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-screen-1024x43.png",
    local_path: "downloaded_images/article_363_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:11.411498",
  },
  {
    id: 1072,
    article_id: 364,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-screen-1024x42.png",
    local_path: "downloaded_images/article_364_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:19.55136",
  },
  {
    id: 1073,
    article_id: 365,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-screen-1024x43.png",
    local_path: "downloaded_images/article_365_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:27.276531",
  },
  {
    id: 1074,
    article_id: 366,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-form-1024x43.png",
    local_path: "downloaded_images/article_366_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:34.846907",
  },
  {
    id: 1075,
    article_id: 367,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-screen-form-search-1024x29.png",
    local_path: "downloaded_images/article_367_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:42.399124",
  },
  {
    id: 1076,
    article_id: 369,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/TaskAPIFormExample.png",
    local_path: "downloaded_images/article_369_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:08:56.512948",
  },
  {
    id: 1077,
    article_id: 373,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-task-bulk-1024x38.png",
    local_path: "downloaded_images/article_373_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:09:25.214467",
  },
  {
    id: 1078,
    article_id: 374,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-task-1024x38.png",
    local_path: "downloaded_images/article_374_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:09:32.833817",
  },
  {
    id: 1079,
    article_id: 375,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-task-1-1024x41.png",
    local_path: "downloaded_images/article_375_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:09:41.123406",
  },
  {
    id: 1080,
    article_id: 376,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-task-1024x37.png",
    local_path: "downloaded_images/article_376_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:09:49.410848",
  },
  {
    id: 1081,
    article_id: 377,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-task-files-1024x41.png",
    local_path: "downloaded_images/article_377_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:09:57.221659",
  },
  {
    id: 1082,
    article_id: 378,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-task-1024x38.png",
    local_path: "downloaded_images/article_378_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:06.744252",
  },
  {
    id: 1083,
    article_id: 379,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-task-search-1024x41.png",
    local_path: "downloaded_images/article_379_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:15.16557",
  },
  {
    id: 1084,
    article_id: 380,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-task-search-1024x37.png",
    local_path: "downloaded_images/article_380_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:22.926523",
  },
  {
    id: 1085,
    article_id: 381,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-task-recurring-1024x42.png",
    local_path: "downloaded_images/article_381_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:30.380427",
  },
  {
    id: 1086,
    article_id: 382,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-task-recurring-1024x43.png",
    local_path: "downloaded_images/article_382_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:38.58643",
  },
  {
    id: 1087,
    article_id: 383,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-task-recurring-files-1024x43.png",
    local_path: "downloaded_images/article_383_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:45.992932",
  },
  {
    id: 1088,
    article_id: 384,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-task-recurring-1024x42.png",
    local_path: "downloaded_images/article_384_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:10:53.824905",
  },
  {
    id: 1089,
    article_id: 385,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/d6qAETMqE92E8eGHpJ2A_GRvK1lR0qKngg.png",
    local_path: "downloaded_images/article_385_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:01.602862",
  },
  {
    id: 1090,
    article_id: 386,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-task-recurring-search-1024x44.png",
    local_path: "downloaded_images/article_386_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:10.682062",
  },
  {
    id: 1091,
    article_id: 387,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/0K42HyteBnYX1cmACiBM0nQmAZkunGa76A.png",
    local_path: "downloaded_images/article_387_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:18.942495",
  },
  {
    id: 1092,
    article_id: 387,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-2.png",
    local_path: "downloaded_images/article_387_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:19.283734",
  },
  {
    id: 1093,
    article_id: 388,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-user-1024x38.png",
    local_path: "downloaded_images/article_388_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:26.848733",
  },
  {
    id: 1094,
    article_id: 389,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-user-1024x28.png",
    local_path: "downloaded_images/article_389_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:34.456201",
  },
  {
    id: 1095,
    article_id: 390,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-user-1024x41.png",
    local_path: "downloaded_images/article_390_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:42.630971",
  },
  {
    id: 1096,
    article_id: 391,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-user-search-1024x41.png",
    local_path: "downloaded_images/article_391_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:50.963381",
  },
  {
    id: 1097,
    article_id: 391,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11122625599/original/lrdpu3jeF5_gLX-6QWWiOZzL_V0oKhvhmg.png?1733357225",
    local_path: "downloaded_images/article_391_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:51.888169",
  },
  {
    id: 1098,
    article_id: 392,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/delete-usergroup-1024x42.png",
    local_path: "downloaded_images/article_392_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:11:59.481745",
  },
  {
    id: 1099,
    article_id: 393,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/put-usergroup-1024x43.png",
    local_path: "downloaded_images/article_393_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:07.677836",
  },
  {
    id: 1100,
    article_id: 394,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/post-usergroup-1024x42.png",
    local_path: "downloaded_images/article_394_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:15.67247",
  },
  {
    id: 1101,
    article_id: 395,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hOApsvr7mgWa4dKkYA3DiyInDQK0CygGZQ.png",
    local_path: "downloaded_images/article_395_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:23.277686",
  },
  {
    id: 1102,
    article_id: 396,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/get-usergroup-search-1024x43.png",
    local_path: "downloaded_images/article_396_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:30.937485",
  },
  {
    id: 1103,
    article_id: 397,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/4ND_0XSTyNUWji4eCWkyQCdbuf5cLyNODA.png",
    local_path: "downloaded_images/article_397_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:39.482531",
  },
  {
    id: 1104,
    article_id: 397,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/DqwaD7iIK92glSxvTYh_GXps5_e8EwiLXg.png",
    local_path: "downloaded_images/article_397_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:12:39.664737",
  },
  {
    id: 1105,
    article_id: 400,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-100.png",
    local_path: "downloaded_images/article_400_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:01.349893",
  },
  {
    id: 1106,
    article_id: 401,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Master-Client-Repository-Diagram.jpg",
    local_path: "downloaded_images/article_401_img_0.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:10.589595",
  },
  {
    id: 1107,
    article_id: 401,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Vendor-Repo-Nav.png",
    local_path: "downloaded_images/article_401_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:10.768156",
  },
  {
    id: 1108,
    article_id: 401,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ManageInstalls.png",
    local_path: "downloaded_images/article_401_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:10.947521",
  },
  {
    id: 1109,
    article_id: 402,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-97.png",
    local_path: "downloaded_images/article_402_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:18.499493",
  },
  {
    id: 1110,
    article_id: 402,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-99.png",
    local_path: "downloaded_images/article_402_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:18.674725",
  },
  {
    id: 1111,
    article_id: 402,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-98.png",
    local_path: "downloaded_images/article_402_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:18.851623",
  },
  {
    id: 1112,
    article_id: 405,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-85.png",
    local_path: "downloaded_images/article_405_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:41.514247",
  },
  {
    id: 1113,
    article_id: 405,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-96.png",
    local_path: "downloaded_images/article_405_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:41.693414",
  },
  {
    id: 1114,
    article_id: 405,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-93.png",
    local_path: "downloaded_images/article_405_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:41.869619",
  },
  {
    id: 1115,
    article_id: 405,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-95.png",
    local_path: "downloaded_images/article_405_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:13:42.052013",
  },
  {
    id: 1116,
    article_id: 409,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/mNEtB2kingdngtUGEBvq_kDb8hCcUicN4Q-1.png",
    local_path: "downloaded_images/article_409_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:12.579745",
  },
  {
    id: 1117,
    article_id: 409,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/xDXkqoZF5uO826QOEl9E-Sf83Sc_VCVIKQ-1.png",
    local_path: "downloaded_images/article_409_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:12.760453",
  },
  {
    id: 1118,
    article_id: 409,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/S0rXQyxX22zkxFpRuiZL3yCidT5Fw7LYSA-1.png",
    local_path: "downloaded_images/article_409_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:12.94441",
  },
  {
    id: 1119,
    article_id: 409,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Y2PKCEeN5SW30VLBGrl76F9eu4h_eHDYmA-1.png",
    local_path: "downloaded_images/article_409_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:13.124851",
  },
  {
    id: 1120,
    article_id: 409,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/billing-user-insights.png",
    local_path: "downloaded_images/article_409_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:13.305865",
  },
  {
    id: 1121,
    article_id: 414,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NteD2lR5hzS1xdAwXW5FIjHsNzz070hIwg.png",
    local_path: "downloaded_images/article_414_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:50.544597",
  },
  {
    id: 1122,
    article_id: 414,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IsT-euTWUSVvnAmP-2CEZ4AgbWBz3mlDFg.png",
    local_path: "downloaded_images/article_414_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:50.719872",
  },
  {
    id: 1123,
    article_id: 414,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JI4PVD_HOs6ilUNK1iWehnMyaKAG7NlR5w.png",
    local_path: "downloaded_images/article_414_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:51.081165",
  },
  {
    id: 1124,
    article_id: 414,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/trb__kQxpyqnDJYIGeLwwF0b3F7f1lVsvg.png",
    local_path: "downloaded_images/article_414_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:51.441285",
  },
  {
    id: 1125,
    article_id: 415,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/z7R15j1daRW1cSe6T-CVHJFjIuFF4tTO0w-e1755665753769.png",
    local_path: "downloaded_images/article_415_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:14:59.3557",
  },
  {
    id: 1126,
    article_id: 416,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/eYDdpIGtm03ZVjnWFLrcdoAhHT3eRga7Kg.png",
    local_path: "downloaded_images/article_416_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:15:08.565077",
  },
  {
    id: 1127,
    article_id: 416,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/hR3LnNZvoVkzJMIVt3jNsEy3tCfBK0K9ZA.png",
    local_path: "downloaded_images/article_416_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:15:08.912855",
  },
  {
    id: 1128,
    article_id: 416,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IdZMBl-1qd6ahkDHzRt9oJqtlUN5dhyw2Q.png",
    local_path: "downloaded_images/article_416_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:15:09.087759",
  },
  {
    id: 1129,
    article_id: 421,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Gdepx72_RE6Kpoyccbc9yFOcUZIlqAwx4A.jpg",
    local_path: "downloaded_images/article_421_img_0.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T18:15:46.225958",
  },
  {
    id: 1130,
    article_id: 421,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/CxQfRwDs2IWyquKopu6vff2uI3d5bDxspw-1024x252.jpg",
    local_path: "downloaded_images/article_421_img_1.jpg",
    alt_text: "",
    downloaded_at: "2025-10-21T18:15:46.402162",
  },
  {
    id: 1131,
    article_id: 426,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/J2YNeQb6N4WsXUFywGqKO8qrepf9YaOSEg.png",
    local_path: "downloaded_images/article_426_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:23.896957",
  },
  {
    id: 1132,
    article_id: 427,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/17zhHCk_-GgW-PnmCqUdquqGOuozGN_zw.png",
    local_path: "downloaded_images/article_427_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:38.747898",
  },
  {
    id: 1133,
    article_id: 427,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/woEYUPBv1ghyXmLneKd7CjmAAW7kPEy1hw.gif",
    local_path: "downloaded_images/article_427_img_1.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:39.718276",
  },
  {
    id: 1134,
    article_id: 428,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qrgqPabC_odLDmFicxO-9-42Ez4j5G71zA.gif",
    local_path: "downloaded_images/article_428_img_0.gif",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:49.201416",
  },
  {
    id: 1135,
    article_id: 428,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Kl4f3nN3CCxcQZ7NMhJR3Kjsm819AEr6xw.png",
    local_path: "downloaded_images/article_428_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:49.38646",
  },
  {
    id: 1136,
    article_id: 428,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/n1bCgvPKC-4iU7wI4NYN8utpXyeFUPOTvQ.png",
    local_path: "downloaded_images/article_428_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:49.568653",
  },
  {
    id: 1137,
    article_id: 429,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/zPNT4jNyw9mKGBxANbJ6XuOCCIAdk1OK4Q.png",
    local_path: "downloaded_images/article_429_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:16:57.1661",
  },
  {
    id: 1138,
    article_id: 430,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11124250079/original/j36czTfQFqPYXsYUCNHm_YY2cinvs0JQBg.png?1737558021",
    local_path: "downloaded_images/article_430_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:05.636501",
  },
  {
    id: 1139,
    article_id: 430,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11124250265/original/Iu95KdwbaZByH2VT1Ey4ZGU7Wye3aUPRzw.png?1737558182",
    local_path: "downloaded_images/article_430_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:06.360906",
  },
  {
    id: 1140,
    article_id: 436,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/NteD2lR5hzS1xdAwXW5FIjHsNzz070hIwg.png",
    local_path: "downloaded_images/article_436_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:48.664552",
  },
  {
    id: 1141,
    article_id: 436,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IsT-euTWUSVvnAmP-2CEZ4AgbWBz3mlDFg.png",
    local_path: "downloaded_images/article_436_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:48.85939",
  },
  {
    id: 1142,
    article_id: 436,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/JI4PVD_HOs6ilUNK1iWehnMyaKAG7NlR5w.png",
    local_path: "downloaded_images/article_436_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:49.037432",
  },
  {
    id: 1143,
    article_id: 436,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/trb__kQxpyqnDJYIGeLwwF0b3F7f1lVsvg.png",
    local_path: "downloaded_images/article_436_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:17:49.222554",
  },
  {
    id: 1144,
    article_id: 438,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/iYZhK7ggq-RwLoVb3FwH173vn4_zUUE9vw.png",
    local_path: "downloaded_images/article_438_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:10.707377",
  },
  {
    id: 1145,
    article_id: 438,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/9gSbeJOMLsipAU-NdxTvZiFxqotKdjT3Hg.png",
    local_path: "downloaded_images/article_438_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:11.232626",
  },
  {
    id: 1146,
    article_id: 438,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/kTx2dPMe_Wvu2CBP7g7Q-mjedfRPtBJMTw.png",
    local_path: "downloaded_images/article_438_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:11.730341",
  },
  {
    id: 1147,
    article_id: 438,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/5QNEBnOyf1NmyXNS7Y5XB78hVp7Zu4CYKA.png",
    local_path: "downloaded_images/article_438_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:11.931342",
  },
  {
    id: 1148,
    article_id: 438,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/yVyzo4VvbU7n-lEQnDobPpZ-AGTqmTHhgQ.png",
    local_path: "downloaded_images/article_438_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:12.125813",
  },
  {
    id: 1149,
    article_id: 441,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/L3-UEs6yqxsSwMGi0pDus4nKEzGyoZVQiA.png",
    local_path: "downloaded_images/article_441_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:34.516004",
  },
  {
    id: 1150,
    article_id: 441,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/iiXrDJVFRq-FCSJ-vsCcuRxb7iO2ljZKSQ.png",
    local_path: "downloaded_images/article_441_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:18:34.690068",
  },
  {
    id: 1151,
    article_id: 444,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/lWLeoisYOZ92xifQm-XbkoIn-Qh0b427Tw.png",
    local_path: "downloaded_images/article_444_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:19:01.078783",
  },
  {
    id: 1152,
    article_id: 444,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/3ydLd3W7vUl0qTaHicv4ldOyGvp7Nl4mFQ.png",
    local_path: "downloaded_images/article_444_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:19:01.431139",
  },
  {
    id: 1153,
    article_id: 444,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/IMqnWqilUTc9s_B20YgU04uRI3ZVxeiVg.png",
    local_path: "downloaded_images/article_444_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:19:02.12703",
  },
  {
    id: 1154,
    article_id: 452,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/ni-qKzp7O9cFt_4k_YXkLZllZ9sCz4lTig.png",
    local_path: "downloaded_images/article_452_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:19:59.409592",
  },
  {
    id: 1155,
    article_id: 454,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/HIW81g8nflvhNKmYm3Q1IYhcWa6h9CBASKWd.png",
    local_path: "downloaded_images/article_454_img_0.png",
    alt_text: "Google Play",
    downloaded_at: "2025-10-21T18:20:14.014387",
  },
  {
    id: 1156,
    article_id: 454,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/right_arrow.png",
    local_path: "downloaded_images/article_454_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:14.196539",
  },
  {
    id: 1157,
    article_id: 454,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/right_arrow.png",
    local_path: "downloaded_images/article_454_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:14.377978",
  },
  {
    id: 1158,
    article_id: 454,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/HIW81g8nflvhNKmYm3Q1IYhcWa6h9CBASKWd.png",
    local_path: "downloaded_images/article_454_img_3.png",
    alt_text: "Google Play",
    downloaded_at: "2025-10-21T18:20:14.559411",
  },
  {
    id: 1159,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-113158-1024x542.png",
    local_path: "downloaded_images/article_457_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:36.174139",
  },
  {
    id: 1160,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000024-1024x504.png",
    local_path: "downloaded_images/article_457_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:36.348833",
  },
  {
    id: 1161,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-123655-1024x334.png",
    local_path: "downloaded_images/article_457_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:36.527461",
  },
  {
    id: 1162,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000026-1-1024x183.png",
    local_path: "downloaded_images/article_457_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:36.712314",
  },
  {
    id: 1163,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_07141-3-1024x321.png",
    local_path: "downloaded_images/article_457_img_4.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:36.894556",
  },
  {
    id: 1164,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_03191-2-1024x322.png",
    local_path: "downloaded_images/article_457_img_5.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:37.074702",
  },
  {
    id: 1165,
    article_id: 457,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/06/lock-icon-1024x320.png",
    local_path: "downloaded_images/article_457_img_6.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:37.255441",
  },
  {
    id: 1166,
    article_id: 458,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Bk4K09nIzV4VZ3Nqp3aioY6F3wxiXOQGBA.png",
    local_path: "downloaded_images/article_458_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:47.9095",
  },
  {
    id: 1167,
    article_id: 458,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/T71uPPkNqSiPl0hZLrQWfPSiyP2cUkf2Ow.png",
    local_path: "downloaded_images/article_458_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:48.087985",
  },
  {
    id: 1168,
    article_id: 458,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/GanpKABaS2gibKP4Y6YtEBGDTUMA2uYPIA.png",
    local_path: "downloaded_images/article_458_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:20:48.265967",
  },
  {
    id: 1169,
    article_id: 460,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/copia-1024x346.png",
    local_path: "downloaded_images/article_460_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:03.208389",
  },
  {
    id: 1170,
    article_id: 460,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/image-57-1024x392.png",
    local_path: "downloaded_images/article_460_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:03.383501",
  },
  {
    id: 1171,
    article_id: 460,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000035-1024x448.png",
    local_path: "downloaded_images/article_460_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:03.560774",
  },
  {
    id: 1172,
    article_id: 463,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/4uVJ50vUVIu9Tmu7YyDOWF2ESiEarQjiNA.png",
    local_path: "downloaded_images/article_463_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:27.55899",
  },
  {
    id: 1173,
    article_id: 463,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/UNXoUF8pEacBwIpyDTGSdZ-Slu25IlgI5w.png",
    local_path: "downloaded_images/article_463_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:27.737162",
  },
  {
    id: 1174,
    article_id: 463,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/w9aD7ZPnOBKDD3LRoio5Mo1qteXae05H7Q.png",
    local_path: "downloaded_images/article_463_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:27.913224",
  },
  {
    id: 1175,
    article_id: 464,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000028-1024x842.png",
    local_path: "downloaded_images/article_464_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:35.847331",
  },
  {
    id: 1176,
    article_id: 464,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-144115-1024x346.png",
    local_path: "downloaded_images/article_464_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:36.033436",
  },
  {
    id: 1177,
    article_id: 465,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000032.png",
    local_path: "downloaded_images/article_465_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:21:44.091111",
  },
  {
    id: 1178,
    article_id: 473,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/yFOU4_HBskk5ysYs_X8Adit4USSwOWVoJA.png",
    local_path: "downloaded_images/article_473_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:22:41.838258",
  },
  {
    id: 1179,
    article_id: 473,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/rkHjerNJTbl_a8TzGkH7V95cbRp4mxOQOg.png",
    local_path: "downloaded_images/article_473_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:22:42.898436",
  },
  {
    id: 1180,
    article_id: 473,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/57Clm07XOfQ9I1svtQieWBbAI2aoon770g.png",
    local_path: "downloaded_images/article_473_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:22:43.478721",
  },
  {
    id: 1181,
    article_id: 478,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/OtNM7ugAWpLIcLd7J7rI5z_Qe6Nh6TVdBg.png",
    local_path: "downloaded_images/article_478_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:17.426074",
  },
  {
    id: 1182,
    article_id: 478,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Re7axkMTQ2LrtnTcWq3RqeN9iVdQQCasLg.png",
    local_path: "downloaded_images/article_478_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:17.801271",
  },
  {
    id: 1183,
    article_id: 478,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/qUOw_f8sYGkTldPFKz7VN152BuACo4mTSw.png",
    local_path: "downloaded_images/article_478_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:18.145389",
  },
  {
    id: 1184,
    article_id: 479,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-153710.png",
    local_path: "downloaded_images/article_479_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:26.366545",
  },
  {
    id: 1185,
    article_id: 479,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-154108.png",
    local_path: "downloaded_images/article_479_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:26.5436",
  },
  {
    id: 1186,
    article_id: 479,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-154510.png",
    local_path: "downloaded_images/article_479_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:26.720938",
  },
  {
    id: 1187,
    article_id: 479,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_07111.png",
    local_path: "downloaded_images/article_479_img_3.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:26.905155",
  },
  {
    id: 1188,
    article_id: 480,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/GnQe6V1hJlpCpqLjndxULTK11v7TTcpwZA.png",
    local_path: "downloaded_images/article_480_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:35.397886",
  },
  {
    id: 1189,
    article_id: 480,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/EMbAz5KFYYPAYEpSk7yacP_RMvSPv-lz6g.png",
    local_path: "downloaded_images/article_480_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:35.751421",
  },
  {
    id: 1190,
    article_id: 480,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/HmlN2wqDNiBeo-XQcvMtx1oK_jVbNZYz9w.png",
    local_path: "downloaded_images/article_480_img_2.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:35.925052",
  },
  {
    id: 1191,
    article_id: 481,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-155138-1024x246.png",
    local_path: "downloaded_images/article_481_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:43.329318",
  },
  {
    id: 1192,
    article_id: 481,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Untitled-Project-Time-0_00_000036-1024x328.png",
    local_path: "downloaded_images/article_481_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:43.510445",
  },
  {
    id: 1193,
    article_id: 482,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-145458-1024x497.png",
    local_path: "downloaded_images/article_482_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:51.101556",
  },
  {
    id: 1194,
    article_id: 482,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/Screenshot-2025-06-04-145907-1024x502.png",
    local_path: "downloaded_images/article_482_img_1.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:23:51.282567",
  },
  {
    id: 1195,
    article_id: 490,
    original_url:
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/11128403349/original/N6pcRhu5R6I16t6JlXm1Fl_Hrt3rCUZyWQ.png?1746627175",
    local_path: "downloaded_images/article_490_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:24:45.944284",
  },
  {
    id: 1196,
    article_id: 493,
    original_url:
      "https://help.appenate.com/wp-content/uploads/2025/04/CsRIqoqQTom83Op156-x-QtRXZqToCtgIA.png",
    local_path: "downloaded_images/article_493_img_0.png",
    alt_text: "",
    downloaded_at: "2025-10-21T18:25:07.576594",
  },
];
