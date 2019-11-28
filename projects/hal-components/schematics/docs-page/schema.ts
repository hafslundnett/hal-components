export interface Schema {
  // The name of the Doc-page.
  name: string;

  // type of doc (comp, service, ...)
  type: string;

  // The path to create the doc-page.
  path?: string;

  // The name of the project.
  project?: string;
}
