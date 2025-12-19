export const GA_TRACKING_ID = 'G-9YJ1MW92QY';

// Track page views
export const pageview = (url: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[GA Pageview] ::::>', url); 
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events (clicks etc.)
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (process.env.NODE_ENV === 'development') {
    // console.log('[GA Event] ::::>', { action, category, label, value }); 
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
