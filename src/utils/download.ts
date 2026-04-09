/**
 * Utility to trigger a browser download of a text-based file
 */
export const downloadFile = (content: string, fileName: string, contentType: string = 'text/csv') => {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * Generates a mock CSV report for the dashboard
 */
export const generateDashboardCSV = (data: any[]) => {
  const header = "Day,Threats Detected,Moderation Actions\n";
  const rows = data.map(item => `${item.name},${item.threats},${item.moderation}`).join("\n");
  return header + rows;
};