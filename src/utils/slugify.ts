export function createJobSlug(job: any) {
  return job.route; 
}



// export function createJobSlug(job: any) {
//   const titleSlug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
//   const companySlug = job.company.toLowerCase().replace(/[^a-z0-9]+/g, "-");
//   return `${titleSlug}-${job._id}-${companySlug}`;
// }
