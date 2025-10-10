import Swal from 'sweetalert2';

// Load installed apps from localStorage
export const loadInstalledApps = () => {
  try {
    const data = localStorage.getItem('installedApps');
    if (!data) return [];

    const parsed = JSON.parse(data);

    return parsed.map(item => ({
      ...item,
      downloads: Number(item.downloads) || 0,
      ratingAvg: Number(item.ratingAvg) || 0,
      reviews: Number(item.reviews) || 0,
      size: Number(item.size) || 0,
    }));
  } catch (error) {
    console.error('Error loading apps:', error);
    return [];
  }
};

// Check if an app is already installed
export const isAppInstalled = (id) => {
  try {
    const installedApps = loadInstalledApps();
    return installedApps.some(item => item.id === id);
  } catch (error) {
    console.error('Error checking install status:', error);
    return false;
  }
};

// Install a new app
export const installApp = (app) => {
  const installedApps = loadInstalledApps();

  try {
    const alreadyInstalled = installedApps.some(item => item.id === app.id);

    if (alreadyInstalled) {
      Swal.fire({
        icon: 'info',
        title: 'Already Installed',
        text: 'This app is already in your installation list.',
        confirmButtonText: 'OK',
      });
      return false;
    }

    const updatedApps = [...installedApps, app];
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${app.title} installed successfully!`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    return true;
  } catch (error) {
    console.error('Error installing app:', error);
    Swal.fire({
      icon: 'error',
      title: 'Installation Failed',
      text: 'Something went wrong while installing the app.',
      confirmButtonText: 'OK',
    });
    return false;
  }
};

export const removeApp = (id) => {
  const installedApps = loadInstalledApps();

  try {
    const updatedApps = installedApps.filter(app => app.id !== id);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));

    Swal.fire({
      icon: 'success',
      title: 'Uninstalled',
      text: 'App removed from my installation list.',
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error('Error uninstalling app:', error);
  }
};
