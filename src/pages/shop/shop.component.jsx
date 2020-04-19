import React from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
