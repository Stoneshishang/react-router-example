import * as React from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Post: React.FC<Props> = ({ match }) => {
  console.log(match);
  
  // React.useEffect(() => {
  //   fetch(`api.example.com/posts/${match.params.id}`)
  // }, [match.params.id])

  return <div>rendering post {match.params.id}</div>;
};
