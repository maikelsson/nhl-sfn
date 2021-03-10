import * as React from "react";

interface ILogoProps extends React.SVGProps<SVGSVGElement> {
  teamId: number;
}

export const LogoProvider: React.FC<ILogoProps> = ({ teamId, ...rest }): JSX.Element | null => {
  const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./logos/${teamId}_dark.svg`)
        ).default;
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [teamId]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <>
        <ImportedIcon {...rest} />
      </>
    );
  }

  return null;
};
