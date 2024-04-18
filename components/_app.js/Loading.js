import { useContext } from 'react';
import Context from '../../modules/Context';

export default () => {
  const { loading } = useContext(Context);
  return <>
    {loading &&
      <div className="backdrop">
        <div className="roller">
          Loading...
        </div>
      </div>
    }
    <style jsx>{`
    `}</style>
  </>
}