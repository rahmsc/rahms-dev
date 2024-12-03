export function formatDate(dateString: string | Date): string {
  if (!dateString) return "No date available";

  try {
    const date = new Date(dateString);

    // Check if date is valid
    if (Number.isNaN(date.getTime())) {
      return "No date available";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "No date available";
  }
}
