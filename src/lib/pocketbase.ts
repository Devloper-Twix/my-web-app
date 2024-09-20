import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getImages() {
  const records = await pb.collection('gallery_images').getList(1, 50, {
    sort: '-created',
  });
  return records.items;
}

export async function uploadImage(file: File, orientation: 'landscape' | 'portrait') {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('orientation', orientation);

  return await pb.collection('gallery_images').create(formData);
}