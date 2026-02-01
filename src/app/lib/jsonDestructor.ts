export function parseApartments(section: any) {
  return {
    sectionTitle: section.sectionTitle ?? '',

    content:
      section.sectionContent?.root?.children
        ?.map((node: any) =>
          node.children
            ?.map((child: any) => child.text ?? '')
            .join(' ')
            .trim(),
        )
        .filter(Boolean) ?? [],

    images:
      section.sectionImage?.map(({ id, alt, url }: any) => ({
        id,
        alt: alt ?? '',
        url: url ?? '',
      })) ?? [],
  }
}
